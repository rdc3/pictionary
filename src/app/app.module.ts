import { AngularFireAuthGuard } from '@angular/fire/auth-guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './game/form/form.component';
import { BreakPointRegistry, FlexLayoutModule, FlexOrderStyleBuilder, FlexStyleBuilder, LayoutAlignStyleBuilder, LayoutStyleBuilder, MediaMarshaller, PrintHook, ShowHideStyleBuilder, StylesheetMap, StyleUtils, ɵMatchMedia } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { LoginComponent } from './admin/login/login.component';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { AddWordsComponent } from './admin/add-words/add-words.component';
import { DefaultPageComponent } from './game/default-page/default-page.component';
import { CanvasComponent } from './game/canvas/canvas.component';
import { AngularFireStorageModule } from '@angular/fire/storage';


const firebaseConfig = {
  apiKey: 'AIzaSyAHhmeRowyEK399b1OxsjslbijHELXan-4',
  authDomain: 'pictionary-ccd50.firebaseapp.com',
  projectId: 'pictionary-ccd50',
  storageBucket: 'pictionary-ccd50.appspot.com',
  messagingSenderId: '391464944887',
  appId: '1:391464944887:web:847e661a193d52921ffff2',
  measurementId: 'G-8HH0S0BLQ0'
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
    FormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    BrowserAnimationsModule,
    FormsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatGridListModule,
    MatListModule,
    MatInputModule,
    MatIconModule,
    MatProgressBarModule,
    MatSnackBarModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTableModule,
    MatSidenavModule,
    ReactiveFormsModule
  ],
  providers: [
    AngularFireAuthGuard,
    StyleUtils, StylesheetMap, MediaMarshaller, ɵMatchMedia, LayoutAlignStyleBuilder,
    BreakPointRegistry, PrintHook, LayoutStyleBuilder, FlexStyleBuilder, ShowHideStyleBuilder, FlexOrderStyleBuilder
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
