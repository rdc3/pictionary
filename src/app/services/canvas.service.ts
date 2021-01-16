import { Injectable } from '@angular/core';

import { DbService } from './../services/db.service';
import { AuthService } from './auth.service';
import { DataStoreService } from './data-store.service';

@Injectable({
  providedIn: 'root'
})

export class CanvasService {


  constructor(private db: DbService, private dStoreS: DataStoreService, private auth: AuthService) {
    this.dStoreS.canvas$.subscribe(
      (canvas) => {
        this.dStoreS.canvasDrawing = (canvas.drawing) ? canvas.drawing : this.dStoreS.defaultDrawing;
      },
      (err) => this.auth.analyzeError(err)
    );
  }

  startDrawing() {
    this.dStoreS.isDrawing = true;
    this.dStoreS.canvas.artist = this.dStoreS.player.name;
    this.dStoreS.currentPath = [];
    this.dStoreS.canvasDrawing.lines.push({ points: this.dStoreS.currentPath, color: this.dStoreS.colorPicked$.value });
  }

  endDrawing() {
    this.dStoreS.isDrawing = false;
    this.saveDrawing();
  }

  clearCanvas() {
    this.dStoreS.canvasDrawing.lines = [];
    this.saveDrawing();
  }

  private saveDrawing() {
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

