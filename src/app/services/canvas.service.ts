import { Injectable } from '@angular/core';

import { AuthService } from './auth.service';
import { DataStoreService } from './data-store.service';
import { DbService } from './../services/db.service';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})

export class CanvasService {


  constructor(
    private db: DbService,
    private dStoreS: DataStoreService,
    private auth: AuthService,
    private log: LoggingService
  ) {
    this.dStoreS.canvas$.subscribe(
      (canvas) => {
        if (canvas) {
          this.dStoreS.canvasDrawing = (canvas.drawing) ? canvas.drawing : this.dStoreS.defaultDrawing;
          this.dStoreS.canvas.artist = (canvas.artist) ? canvas.artist : '';
          this.dStoreS.canvas.canvasWidth = (canvas.canvasWidth) ? canvas.canvasWidth : 1900;
          this.dStoreS.canvas.drawing = (canvas.drawing) ? canvas.drawing : null;
          this.dStoreS.canvas.guessedWords = (canvas.guessedWords) ? canvas.guessedWords : [];
          this.dStoreS.canvas.word = (canvas.word) ? canvas.word : '';
          this.log.debug('canvas:', this.dStoreS.canvas);
        }
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

