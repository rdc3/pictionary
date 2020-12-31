import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private authService: AuthService) { this.isLoggedIn = this.authService.isLoggedIn}
  title = 'pictionary';
  isLoggedIn = false;
  logout() {
    this.authService.logout();
  }
}
