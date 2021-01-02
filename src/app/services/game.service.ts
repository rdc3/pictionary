import { BehaviorSubject, Subject } from 'rxjs';
import { DbService } from './db.service';
import { GameState, Roles } from './../types/types';
import { Injectable } from '@angular/core';
import { Player } from '../types/types';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  player: Player = this.defaultPlayer();
  gameState$: Subject<GameState> = new Subject();
  gameState: GameState = GameState._1_init;
  player$: BehaviorSubject<Player> = new BehaviorSubject (this.defaultPlayer());  // to notify the change in player to other components
  attendance$: BehaviorSubject<number> = new BehaviorSubject (0);
  constructor(private authService: AuthService, private dbService: DbService) {
    this.initPlayer();
    this.gameState$.subscribe(val => this.gameState = val);
    this.dbService.gameInfoDoc.valueChanges().subscribe(gameInfo => {
      this.gameState$.next(gameInfo.gameState);
      const updatedPlayer = gameInfo.players.find(dbPlayer => dbPlayer.id === this.player.id);
      if (updatedPlayer) {
        console.log('error: ', updatedPlayer, this.player);
        if (JSON.stringify(updatedPlayer) !== JSON.stringify(this.player)) {
          this.player = JSON.parse(JSON.stringify(updatedPlayer));
          this.playerUpdated();
        }
      }
      this.attendance$.next((+gameInfo.playerCount) / (+gameInfo.maxPlayers) * 100);
    });
  }

  private defaultPlayer() {
    return {
      id: '0',
      isModerator: false,
      isPlaying: false,
      name: '',
      rank: 0,
      score: 0,
      type: Roles.guesser
    };
  }
  private initPlayer() {
    this.player = this.defaultPlayer();
    this.setPlayerId();
    this.setPlayerName();
    this.playerUpdated();
  }

  private setPlayerId() {
    if (localStorage.getItem('playerId')) {
      this.player.id = String(localStorage.getItem('playerId'));
    } else {
      this.player.id = this.generateId();
      console.log('playerid:', this.player.id);
      localStorage.setItem('playerId', this.player.id);
    }
  }

  private setPlayerName() {
    if (localStorage.getItem('playerName')) {
      this.player.name = String(localStorage.getItem('playerName'));
    } else {
      this.player.name = this.authService.user.displayName;
      console.log('playername:', this.player.id);
      localStorage.setItem('playerName', this.player.name);
    }
  }

  private generateId() {
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
    this.player$.next(this.player);
  }

  joinGame(intInfo: { nickName: string, maxPlayers: number, maxRounds: number }) {
    this.player.name = intInfo.nickName;
    this.dbService.gameInfo.playerCount += 1;
    if (this.gameState === GameState._1_init) {
      this.player.isModerator = true;
      this.player.isPlaying = true;
      this.player.type = Roles.artist;
      this.dbService.gameInfo.gameState = GameState._2_joining;
      this.dbService.gameInfo.maxPlayers = +intInfo.maxPlayers;
      this.dbService.gameInfo.maxRounds = +intInfo.maxRounds;
      this.dbService.gameInfo.players = [];
      this.dbService.roundInfo.roundNumber = 1;
      this.dbService.roundInfo.notYetArtist = [];
    }
    if (this.gameState === GameState._2_joining) {
      if (this.dbService.gameInfo.playerCount === this.dbService.gameInfo.maxPlayers) {
        this.dbService.gameInfo.gameState = GameState._3_playing;
      }
      this.dbService.roundInfo.notYetArtist.push(this.player.id);
      this.player.isPlaying = true;
    }
    this.dbService.updateGameInfo();
    this.dbService.updateRoundInfo();
    this.dbService.addPlayer(this.player);
  }

  roundEnded() {
    let nextArtist = '';
    this.dbService.gameInfo.players.forEach(player => player.type = Roles.guesser);
    if (this.dbService.roundInfo.notYetArtist.length > 0) {
      nextArtist = this.dbService.roundInfo.notYetArtist[0];
      this.dbService.roundInfo.notYetArtist = this.dbService.roundInfo.notYetArtist.filter(id => id !== nextArtist);
    } else if (this.dbService.gameInfo.maxRounds === this.dbService.roundInfo.roundNumber) {
      this.gameEnded();
    }
    this.dbService.roundInfo.roundNumber++;
    this.dbService.updateGameInfo();
    this.dbService.updateRoundInfo();
  }

  gameEnded(byReset: boolean = false) {
    if (byReset) {
      this.dbService.gameInfo.gameState = GameState._1_init;
    } else {
      this.dbService.gameInfo.gameState = GameState._4_end;
    }
    this.dbService.updateGameInfo();
    console.log('game ended..');
  }
}
