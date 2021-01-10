import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupNotificationService {

  constructor(private snackBar: MatSnackBar) {
  }
  notify(message: string) {
    this.snackBar.open(message, 'OK', {
      duration: 5000,
    });
  }
}
