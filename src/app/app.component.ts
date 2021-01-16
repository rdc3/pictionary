import { DataStoreService } from 'src/app/services/data-store.service';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{
  title = 'pictionary';
  isLoggedIn = false;
  fullscreen = false;
  constructor(private authService: AuthService, private dStoreS: DataStoreService) {
    this.isLoggedIn = this.authService.isLoggedIn;
  }
  ngAfterViewInit(): void {
    this.dStoreS.fullScreen$.subscribe(fS => this.fullscreen = fS);
  }
  logout() {
    this.authService.logout();
  }
}
