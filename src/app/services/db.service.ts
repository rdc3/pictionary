import { GameInfo, RoundInfo } from './../types/types';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Canvas } from '../types/types';

@Injectable({
  providedIn: 'root'
})
export class DbService {
  canvasDoc: AngularFirestoreDocument<Canvas>;
  canvas: Canvas;
  gameInfoDoc: AngularFirestoreDocument<GameInfo>;
  gameInfo: GameInfo;
  roundInfoDoc: AngularFirestoreDocument<RoundInfo>;
  roundInfo: RoundInfo;
  constructor(firestore: AngularFirestore) {
    this.canvasDoc = firestore.doc<Canvas>('Pictionary/canvas');
    this.canvasDoc.valueChanges().subscribe(val => {
      this.canvas = val;
      console.log('canvas:', this.canvas);
    });
    this.gameInfoDoc = firestore.doc<GameInfo>('Pictionary/gameInfo');
    this.gameInfoDoc.valueChanges().subscribe(val => {
      this.gameInfo = val;
      console.log('gameInfo:', this.gameInfo);
    });
    this.roundInfoDoc = firestore.doc<RoundInfo>('Pictionary/roundInfo');
    this.roundInfoDoc.valueChanges().subscribe(val => {
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

}
