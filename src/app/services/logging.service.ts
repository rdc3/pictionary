import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoggingService {

  constructor() { }
  debug(...msg) {
    if (!environment.production) {
      console.log(...msg);
    }
  }
}
