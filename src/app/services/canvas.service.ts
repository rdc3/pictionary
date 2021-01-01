import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ColorPicked } from '../types/types';

@Injectable({
  providedIn: 'root'
})

export class CanvasService {

  colorPicked$: BehaviorSubject<ColorPicked> = new BehaviorSubject({ r: 0, b: 0, g: 0, a: 0 });
  isDrawing = false;
  currentPath = [];
  canvasDrawing = [];
  artistCanvasWidth = 1900;

  constructor() { }

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
}

