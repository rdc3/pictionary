import { GameInfo, RoundInfo, Player } from './../types/types';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Canvas } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  canvasDoc: AngularFirestoreDocument<Canvas>;
  canvas$: Observable<Canvas>;
  canvas: Canvas;
  gameInfoDoc: AngularFirestoreDocument<GameInfo>;
  gameInfo$: Observable<GameInfo>;
  gameInfo: GameInfo;
  roundInfoDoc: AngularFirestoreDocument<RoundInfo>;
  roundInfo$: Observable<RoundInfo>;
  roundInfo: RoundInfo;
  constructor(firestore: AngularFirestore) {
    this.canvasDoc = firestore.doc<Canvas>('Pictionary/canvas');
    this.canvas$ = this.canvasDoc.valueChanges();
    this.canvas$.subscribe(val => {
      this.canvas = val;
      console.log('canvas:', this.canvas);
    });
    this.gameInfoDoc = firestore.doc<GameInfo>('Pictionary/gameInfo');
    this.gameInfo$ = this.gameInfoDoc.valueChanges();
    this.gameInfo$.subscribe(val => {
      this.gameInfo = val;
      console.log('gameInfo:', this.gameInfo);
    });
    this.roundInfoDoc = firestore.doc<RoundInfo>('Pictionary/roundInfo');
    this.roundInfo$ = this.roundInfoDoc.valueChanges();
    this.roundInfo$.subscribe(val => {
      this.roundInfo = val;
      console.log('roundInfo:', this.roundInfo);
    });
  }
  updateGameInfo() {
    this.gameInfoDoc.update(this.gameInfo);
  }
  updateRoundInfo() {
    this.roundInfoDoc.update(this.roundInfo);
  }
  updateCanvas() {
    this.canvasDoc.update(this.canvas);
  }
  addPlayer(player: Player) {
    if (this.gameInfo.players.find(p => p.id === player.id)) {
      this.updatePlayer(player);
    } else {
      this.gameInfo.players.push(player);
      this.updateGameInfo();
    }
  }
  updatePlayer(player: Player) {
    this.gameInfo.players.forEach(dbPlayer => {
      if (dbPlayer.id === player.id) {
        dbPlayer = JSON.parse(JSON.stringify(player));
      }
    });
    this.updateGameInfo();
  }

}
