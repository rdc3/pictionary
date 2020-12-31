import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
  
export class CanvasService {

  colorPicked$: BehaviorSubject<ColorPicked> = new BehaviorSubject({ r:0, b:0, g:0, a:0})
  constructor() { }
}

export interface ColorPicked {
  r: number,
  b: number,
  g: number,
  a: number
}