import { GameService } from './game.service';
import { GuessedWord } from './../types/types';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { ColorPicked } from '../types/types';
import { DbService } from './../services/db.service';

@Injectable({
  providedIn: 'root'
})

export class CanvasService {

  colorPicked$: BehaviorSubject<ColorPicked> = new BehaviorSubject({ r: 0, b: 0, g: 0, a: 0 });
  guessedWords$: BehaviorSubject<GuessedWord[]> = new BehaviorSubject([]);
  isDrawing = false;
  currentPath = [];
  canvasDrawing = [];
  artistCanvasWidth = 1900;

  constructor(private db: DbService, private gameService: GameService) {
    this.db.canvas$.subscribe(canvas => {
      this.artistCanvasWidth = canvas.canvasWidth;
      this.guessedWords$.next(canvas.guessedWords);
    });
   }

  startDrawing() {
    this.isDrawing = true;
    this.currentPath = [];
    this.canvasDrawing.push(this.currentPath);
  }

  endDrawing() {
    this.isDrawing = false;
    this.saveDrawing();
  }

  clearCanvas() {
    this.canvasDrawing = [];
  }

  private saveDrawing() {
    console.log('saving:', this.canvasDrawing);
  }

  newGuess(guessedWord: string) {
    this.db.canvas.guessedWords.push({ by: this.gameService.player.id, word: guessedWord });
    this.db.updateCanvas();
  }
}

