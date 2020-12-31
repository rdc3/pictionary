import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from '@angular/material';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { AddWordsComponent } from './admin/add-words/add-words.component';
import { DefaultPageComponent } from './game/default-page/default-page.component';
import { CanvasComponent } from './game/canvas/canvas.component';


const firebaseConfig = {
  apiKey: "AIzaSyAHhmeRowyEK399b1OxsjslbijHELXan-4",
  authDomain: "pictionary-ccd50.firebaseapp.com",
  projectId: "pictionary-ccd50",
  storageBucket: "pictionary-ccd50.appspot.com",
  messagingSenderId: "391464944887",
  appId: "1:391464944887:web:847e661a193d52921ffff2",
  measurementId: "G-8HH0S0BLQ0"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    AddWordsComponent,
    DefaultPageComponent,
    CanvasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireAuthGuard,
    BrowserAnimationsModule,
    AngularFireAuthModule,

    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [AngularFireAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
