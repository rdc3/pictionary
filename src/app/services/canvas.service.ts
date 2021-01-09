import { Injectable } from '@angular/core';

import { DbService } from './../services/db.service';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})

export class CanvasService {


  constructor(private db: DbService, private dStoreS: DataStoreService) {
    this.dStoreS.canvas$.subscribe(canvas => {
      this.dStoreS.canvasDrawing = (canvas.drawing) ? canvas.drawing : this.dStoreS.defaultDrawing;
    });
    // this.dStoreS.playerId = '1'; //this.gameService.player.id
  }

  startDrawing() {
    this.dStoreS.isDrawing = true;
    this.dStoreS.currentPath = [];
    this.dStoreS.canvasDrawing.lines.push({ points: this.dStoreS.currentPath, color: this.dStoreS.colorPicked$.value });
  }

  endDrawing() {
    this.dStoreS.isDrawing = false;
    this.saveDrawing();
  }

  clearCanvas() {
    // console.log('Clearing canvas');
    this.dStoreS.canvasDrawing.lines = [];
    this.saveDrawing();
  }

  private saveDrawing() {
    // console.log('saving:', this.dStoreS.canvasDrawing);
    this.dStoreS.canvas.drawing = this.dStoreS.canvasDrawing;
    this.db.updateCanvas();
  }

  newGuess(guessedWord: string) {
    if (!(this.dStoreS.canvas.guessedWords && this.dStoreS.canvas.guessedWords.length > 0 &&
      this.dStoreS.canvas.guessedWords.find(w => w.word === guessedWord))) {

      this.dStoreS.canvas.guessedWords.push({ byId: this.dStoreS.player.id, byName: this.dStoreS.player.name, word: guessedWord });
      this.db.updateCanvas();
    }
  }
}

