import { DataStoreService } from 'src/app/services/data-store.service';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public afAuth: AngularFireAuth, public router: Router, public dStoreS: DataStoreService) {
    this.dStoreS.user$ = this.afAuth.authState;
    this.dStoreS.user$.subscribe(user => {
      if (user) {
        this.dStoreS.user = user;
        localStorage.setItem('user', JSON.stringify(this.dStoreS.user));
      } else {
        localStorage.setItem('user', null);
      }
    });
  }
  getUser(): Observable<firebase.User> {
    return this.dStoreS.user$;
  }
  async login(email: string, password: string) {
    const result = await this.afAuth.signInWithEmailAndPassword(email, password);
    this.router.navigate(['admin/list']);
  }
  async register(email: string, password: string) {
    const result = await this.afAuth.createUserWithEmailAndPassword(email, password);
    this.sendEmailVerification();
  }
  async sendEmailVerification() {
    await (await this.afAuth.currentUser).sendEmailVerification();
    this.router.navigate(['admin/verify-email']);
  }
  async sendPasswordResetEmail(passwordResetEmail: string) {
    return await this.afAuth.sendPasswordResetEmail(passwordResetEmail);
  }
  async logout() {
    await this.afAuth.signOut();
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user'));
    return user !== null;
  }
  async loginWithGoogle() {
    const result = await this.afAuth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
    this.router.navigate(['game']);
  }
  analyzeError(err: any) {
    if (err && err.code === 'permission-denied') {
      this.router.navigate(['access-denied']);
    }
  }

}
