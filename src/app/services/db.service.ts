import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { DataStoreService } from './data-store.service';
import { AngularfirebaseService } from './angularfirebase.service';

import { GameInfo, RoundInfo, Player, WordsCollection, GameState, OffsetTime, FireTimestamp } from './../types/types';
import { Canvas } from '../types/types';
import { PopupNotificationService } from './popup-notification.service';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor(
    private afs: AngularfirebaseService,
    private dStoreS: DataStoreService,
    private popup: PopupNotificationService) {
    this.dStoreS.canvas = this.dStoreS.defaultCanvas;
    this.dStoreS.canvasDoc = this.afs.doc<Canvas>(this.dStoreS.canvasDbPath);
    this.dStoreS.canvas$ = this.dStoreS.canvasDoc.valueChanges();
    this.dStoreS.canvas$.subscribe(val => {
      if (val) {
        this.dStoreS.canvas.artist = (val.artist) ? val.artist : '';
        this.dStoreS.canvas.canvasWidth = (val.canvasWidth) ? val.canvasWidth : 1900;
        this.dStoreS.canvas.drawing = (val.drawing) ? val.drawing : null;
        this.dStoreS.canvas.guessedWords = (val.guessedWords) ? val.guessedWords : [];
        this.dStoreS.canvas.word = (val.word) ? val.word : '';
        console.log('canvas:', this.dStoreS.canvas);
      }
    });
    this.dStoreS.gameInfoDoc = this.afs.doc<GameInfo>(this.dStoreS.gameInfoDbPath);
    this.dStoreS.gameInfo$ = this.dStoreS.gameInfoDoc.valueChanges();
    this.dStoreS.gameInfo$.subscribe(val => {
      // reset time elapsed when the gamestate goes from joining to playing
      if (this.dStoreS.gameInfo
        && val && this.dStoreS.gameInfo.gameState === GameState._2_joining
        && val.gameState === GameState._3_playing) {
        this.dStoreS.timeElapsed$.next(0);
      }
      this.dStoreS.gameInfo = val;
      console.log('gameInfo:', this.dStoreS.gameInfo);
    });
    this.dStoreS.roundInfoDoc = this.afs.doc<RoundInfo>(this.dStoreS.roundInfoDbPath);
    this.dStoreS.roundInfo$ = this.dStoreS.roundInfoDoc.valueChanges();
    this.dStoreS.roundInfo$.subscribe(val => {
      // reset time elapsed when the round changes
      this.dStoreS.roundInfo = val;
      if (this.dStoreS.roundInfo.roundNumber !== val.roundNumber) {
        this.dStoreS.timeElapsed$.next(0);
      } else {
        // console.log('this.dStoreS.timeElapsed$:', this.dStoreS.timeElapsed$.value);
        // console.log('this.dStoreS.timeElapsed:', this.dStoreS.timeElapsed);
        // console.log('updated time:', this.calculateDiff(new Date(val['updatedAt'].toMillis())));
        // console.log('updated time:', new Date(val['updatedAt'].toMillis()));
        // console.log('updated time:', new Date());
      }
      if (val.startedAt !== this.dStoreS.roundStartTime$.value) {
        this.dStoreS.roundStartTime$.next(val.startedAt);
      }
      console.log('roundInfo:', this.dStoreS.roundInfo);
    });
    this.dStoreS.wordsDoc = this.afs.doc<WordsCollection>(this.dStoreS.defaultWordsDbPath);
    this.dStoreS.words$ = this.dStoreS.wordsDoc.valueChanges();
    this.dStoreS.words$.subscribe(val => {
      this.dStoreS.words = val;
    });
  }
  updateGameInfo() {
    this.afs.set<GameInfo>(this.dStoreS.gameInfoDbPath, this.dStoreS.gameInfo);
  }
  updateDefaultWords() {
    this.afs.set<WordsCollection>(this.dStoreS.defaultWordsDbPath, this.dStoreS.words);
  }
  updateRoundInfo() {
    this.afs.set<RoundInfo>(this.dStoreS.roundInfoDbPath, this.dStoreS.roundInfo);
  }
  updateCanvas() {
    this.afs.set<Canvas>(this.dStoreS.canvasDbPath, this.dStoreS.canvas);
  }
  addPlayer(player: Player) {
    if (this.dStoreS.gameInfo.players.find(p => p.id === player.id)) {
      this.updatePlayer(player);
    } else {
      this.dStoreS.gameInfo.players.push(player);
    }
    this.updateGameInfo();
  }
  updatePlayer(player: Player) {
    this.dStoreS.gameInfo.players.forEach(dbPlayer => {
      if (dbPlayer.id === player.id) {
        dbPlayer = JSON.parse(JSON.stringify(player));
      }
    });
  }
  compareObjects(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length === keys2.length) {
      return keys1.filter(key => object1[key] !== object2[key]).length === 0;
    }
    return false;
  }
  getClientTimeOffset(uid) {
    const path = `${this.dStoreS.serverTimeOffset}/${uid}/time`;
    this.afs.set<OffsetTime>(path, {
      clientTime: new Date(),
      serverTime: this.afs.timestamp
    }).then(val => {
      this.afs.doc<OffsetTime>(path).valueChanges().subscribe(serverVal => {
        console.log('offset values from server:', serverVal);
        this.dStoreS.clientOffsetTime = this.calculateDiff(
          serverVal.serverTime.toDate().getTime()),
          (serverVal.clientTime).toDate().getTime();
      });
    });
  }
  calculateDiff(dateAfter, dateBefore?) {
    if (!dateBefore) {
      dateBefore = new Date();
    } else {
      dateBefore = new Date(dateBefore);
    }
    // console.log('1dateAfter, dateBefore:', dateAfter, dateBefore);
    dateAfter = new Date(dateAfter);
    const diff = Math.round((
      Date.UTC(dateBefore.getFullYear(), dateBefore.getMonth(), dateBefore.getDate(),
        dateBefore.getHours(), dateBefore.getMinutes(), dateBefore.getSeconds()) -
      Date.UTC(dateAfter.getFullYear(), dateAfter.getMonth(), dateAfter.getDate(),
        dateAfter.getHours(), dateAfter.getMinutes(), dateAfter.getSeconds())
    ) / 1000);
    // console.log('diff:', diff);
    return diff;
  }
}
