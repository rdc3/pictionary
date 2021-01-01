import { DbService } from './db.service';
import { GameState, Roles } from './../types/types';
import { Injectable } from '@angular/core';
import { Player } from '../types/types';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  player: Player;
  gameState: GameState = GameState._1_init;
  constructor(private authService: AuthService, private dbService: DbService) {
    console.log('game constructor');
    this.defaultPlayer();
    this.dbService.gameInfoDoc.valueChanges().subscribe(gameInfo => {
      this.gameState = gameInfo.gameState;
    });
  }
  private defaultPlayer() {
    this.player = {
      id: '0',
      isModerator: false,
      isPlaying: false,
      name: '',
      rank: 0,
      score: 0,
      type: Roles.guesser
    };
    this.setPlayerId();
    this.setPlayerName();

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

  joinGame(intInfo: { nickName: string, maxPlayers: number, maxRounds: number }) {
    this.player.name = intInfo.nickName;
    this.dbService.gameInfo.playerCount += 1;
    if (this.gameState === GameState._1_init) {
      this.player.isModerator = true;
      this.player.type = Roles.artist;
      this.dbService.gameInfo.gameState = GameState._2_joining;
      this.dbService.gameInfo.maxPlayers = intInfo.maxPlayers;
      this.dbService.gameInfo.maxRounds = intInfo.maxRounds;
      this.dbService.roundInfo.roundNumber = 1;
      this.dbService.roundInfo.notYetArtist = [];
    }
    if (this.gameState === GameState._2_joining) {
      if (this.dbService.gameInfo.playerCount === this.dbService.gameInfo.maxPlayers) {
        this.dbService.gameInfo.gameState = GameState._3_playing;
      }
      this.dbService.roundInfo.notYetArtist.push(this.player.id);
    }
    this.dbService.updateGameInfo();
    this.dbService.updateRoundInfo();
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
    console.log('game ended..');
  }
}
