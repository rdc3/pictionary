import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user: firebase.User;
  constructor(private authService: AuthService) {
    this.authService.getUser().subscribe (user => this.user = user);
  }
  
  ngOnInit() {
    // console.log(this.user)
  }
  login() {
    this.authService.loginWithGoogle();
  }
  logout() {
    this.authService.logout();
  }
}
