import { PopupNotificationService } from './popup-notification.service';
import { Injectable, OnDestroy } from '@angular/core';

import { WordsService } from './words.service';
import { DbService } from './db.service';
import { GameInfo, GameState, Roles, RoundInfo } from './../types/types';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnDestroy {
  private timer: any;
  constructor(
    private dbS: DbService,
    private wordS: WordsService,
    private dStoreS: DataStoreService,
    private popup: PopupNotificationService
  ) {
    this.initPlayer();
    this.dStoreS.gameState$.subscribe(val => this.dStoreS.gameState = val);
    this.timer = setInterval(() => {
      if (this.dStoreS.timeElapsed < this.dStoreS.gameInfo.maxTime && !this.dStoreS.roundInfo.paused) { this.dStoreS.timeElapsed++; }
      this.updateMessage();
      if (this.dStoreS.timeElapsed === this.dStoreS.gameInfo.maxTime && this.dStoreS.player.isModerator
        && this.dStoreS.gameState === GameState._3_playing) {
        this.roundEnded();
      }
    }, 1000);
    this.dStoreS.timeElapsed$.subscribe(val => this.dStoreS.timeElapsed = val);
    this.dStoreS.gameInfo$.subscribe(gameInfo => {
      this.dStoreS.gameState$.next(gameInfo.gameState);
      if (gameInfo.players && gameInfo.players.length > 0) {
        const updatedPlayer = gameInfo.players.find(dbPlayer => dbPlayer.id === this.dStoreS.player.id);
        if (updatedPlayer) {
          if (!this.dbS.compareObjects(updatedPlayer, this.dStoreS.player)) {
            this.dStoreS.player = JSON.parse(JSON.stringify(updatedPlayer));
            this.playerUpdated();
          }
        }
      }
      this.dStoreS.attendance$.next((+gameInfo.playerCount) / (+gameInfo.maxPlayers) * 100);
      this.dStoreS.canvas$.subscribe(val => {
        if (val) {
          if (val.word) {
            this.dStoreS.word$.next(val.word);
          }
          if (val.guessedWords && val.guessedWords.length > 0) {
            this.dStoreS.guessedWords$.next(val.guessedWords);
            if (val.guessedWords && val.guessedWords.length > 0) {
              const correctGuess = val.guessedWords.filter(word => word.word.toLowerCase() === this.dStoreS.canvas.word.toLowerCase());
              // console.log('correctGuess:', correctGuess);
              if (correctGuess && correctGuess.length > 0) {
                const player = this.dStoreS.gameInfo.players.find(p => p.id === correctGuess[0].byId);
                this.popup.notify(`${player.name} has guessed the word - ${this.dStoreS.canvas.word}`);
                if (this.dStoreS.player.isModerator) {
                  // console.log('correctGuess player', player);
                  player.score++;
                  this.roundEnded();
                }
              }
            }
          }
        }
      });
    });
  }
  ngOnDestroy(): void {
    clearInterval(this.timer);
  }

  resetGame() {
    this.dStoreS.canvas = this.dStoreS.defaultCanvas;
    this.dbS.updateCanvas();
    this.dStoreS.gameInfo = this.dStoreS.defaultGameInfo;
    this.dbS.updateGameInfo();
    this.dStoreS.roundInfo = this.dStoreS.defaultRoundInfo;
    this.dbS.updateRoundInfo();
    // setTimeout(() => window.location.reload(), 1000);
  }

  joinGame(intInfo: { nickName: string, maxPlayers: number, maxRounds: number, maxTime: number, genre: string }) {
    this.dStoreS.player.name = intInfo.nickName;
    this.setPlayerName(this.dStoreS.player.name);
    this.dStoreS.gameInfo.playerCount += 1;
    if (this.dStoreS.gameState === GameState._1_init) {
      this.dStoreS.player.isModerator = true;
      this.dStoreS.player.isPlaying = true;
      this.dStoreS.player.type = Roles.artist;
      this.dStoreS.gameInfo.gameState = GameState._2_joining;
      this.dStoreS.gameInfo.maxPlayers = +intInfo.maxPlayers;
      this.dStoreS.gameInfo.maxRounds = +intInfo.maxRounds;
      this.dStoreS.gameInfo.maxTime = +intInfo.maxTime * 60;
      this.dStoreS.gameInfo.players = [];
      this.dStoreS.roundInfo.roundNumber = 1;
      this.dStoreS.roundInfo.notYetArtist = [];
      this.dStoreS.words.collection = this.wordS.getWordCollection(intInfo.genre);
      this.wordS.nextWord();
      this.dbS.updateDefaultWords();
      this.dbS.updateCanvas();
    }
    if (this.dStoreS.gameState === GameState._2_joining) {
      if (this.dStoreS.gameInfo.playerCount === this.dStoreS.gameInfo.maxPlayers) {
        this.dStoreS.gameInfo.gameState = GameState._3_playing;
      }
      this.dStoreS.roundInfo.notYetArtist.push(this.dStoreS.player.id);
      this.dStoreS.player.isPlaying = true;
    }
    this.dbS.addPlayer(this.dStoreS.player);
    // this.dbService.updateGameInfo();
    this.dbS.updateRoundInfo();
  }
  pauseGame(pause: boolean) {
    this.dStoreS.roundInfo.paused = pause;
    this.dbS.updateRoundInfo();
  }
  private roundEnded() {
    this.dStoreS.timeElapsed = 0;
    if (this.dStoreS.player.isModerator) {
      let nextArtist = '';
      // set all players as guessers
      this.dStoreS.gameInfo.players.forEach(player => player.type = Roles.guesser);
      if (this.dStoreS.roundInfo.notYetArtist.length > 0) {
        // if there are players who were not yet artists in this round, use the 1st one from them as artist
        nextArtist = this.dStoreS.roundInfo.notYetArtist[0];
        this.setNextArtist(nextArtist);
        this.dStoreS.roundInfo.notYetArtist = this.dStoreS.roundInfo.notYetArtist.filter(id => id !== nextArtist);
      } else if (this.dStoreS.gameInfo.maxRounds <= this.dStoreS.roundInfo.roundNumber) {
        // if number of rounds has reached the max number, then end game
        this.gameEnded();
      } else {
        // if all players have been an artist, then move to the next round
        nextArtist = this.dStoreS.gameInfo.players[0].id;
        this.setNextArtist(nextArtist);
        this.dStoreS.roundInfo.notYetArtist = this.dStoreS.gameInfo.players.filter(pl => pl.id !== nextArtist).map(pl => pl.id);
        this.dStoreS.roundInfo.roundNumber++;
      }
      this.dStoreS.canvas = this.dStoreS.defaultCanvas;
      this.wordS.nextWord();
      this.dbS.updateDefaultWords();
      this.dbS.updateCanvas();
      this.dbS.updateGameInfo();
      this.dbS.updateRoundInfo();
    }
  }

  private gameEnded(byReset: boolean = false) {
    if (byReset) {
      this.dStoreS.gameInfo.gameState = GameState._1_init;
    } else {
      this.dStoreS.gameInfo.gameState = GameState._4_end;
    }
    this.dbS.updateGameInfo();
    console.log('game ended..');
  }

  private updateMessage() {
    let newMessage = '';
    if (this.dStoreS.player) {
      if (this.dStoreS.gameState < GameState._4_end) {
        if (this.dStoreS.player.type === Roles.artist) {
          newMessage = `Hi ${this.dStoreS.player.name}. You have to draw " ${this.dStoreS.word$.value} ".
           ${(this.dStoreS.gameInfo.maxTime - this.dStoreS.timeElapsed)} seconds left.`;
        } else {
          newMessage = `Hi ${this.dStoreS.player.name}. You have 
          ${(this.dStoreS.gameInfo.maxTime - this.dStoreS.timeElapsed)} seconds to guess the word.`;
        }
      } else {
        
        newMessage = 'Game Over';
      }
      if (this.dStoreS.message$.value !== newMessage) {
        this.dStoreS.message$.next(newMessage);
      }
    }
  }

  private initPlayer() {
    this.dStoreS.player = this.dStoreS.defaultPlayer;
    this.setPlayerId();
    this.setPlayerName(null);
    this.playerUpdated();
  }

  private setPlayerId() {
    if (localStorage.getItem('playerId')) {
      this.dStoreS.player.id = String(localStorage.getItem('playerId'));
    } else {
      const user = JSON.parse(localStorage.getItem('user'));
      this.dStoreS.player.id = (user && user.id) ? user.id : this.generateId();
      localStorage.setItem('playerId', this.dStoreS.player.id);
    }
  }

  private setPlayerName(name: string) {
    if (name) {
      localStorage.setItem('playerName', name);
    } else if (localStorage.getItem('playerName')) {
      this.dStoreS.player.name = String(localStorage.getItem('playerName'));
    } else {
      this.dStoreS.player.name = this.dStoreS.user.displayName;
      localStorage.setItem('playerName', this.dStoreS.player.name);
    }
  }

  private generateId() {
    if (localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).uid) {
      return JSON.parse(localStorage.getItem('user')).uid;
    }
    const x = Math.floor((Math.random() * 100000000) + 1);
    return pad(x, 8);
    function pad(numb, length) {
      let str = '' + numb;
      while (str.length < length) {
        str = '0' + str;
      }
      return str;
    }
  }

  private playerUpdated() {
    this.dStoreS.player$.next(this.dStoreS.player);
  }

  private setNextArtist(nextArtist: string) {
    this.dStoreS.gameInfo.players.forEach(player => {
      if (player.id === nextArtist) { player.type = Roles.artist; }
    });
  }

}
