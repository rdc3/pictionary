import { DefaultPageComponent } from './game/default-page/default-page.component';
import { LoginComponent } from './admin/login/login.component';
import { AddWordsComponent } from './admin/add-words/add-words.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './admin/register/register.component';
import { ForgotPasswordComponent } from './admin/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './admin/verify-email/verify-email.component';
import { AngularFireAuthGuard, hasCustomClaim, redirectUnauthorizedTo, redirectLoggedInTo } from '@angular/fire/auth-guard';
import { canActivate } from '@angular/fire/auth-guard';

const adminOnly = () => hasCustomClaim('admin');
const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['login']);
const redirectLoggedInToDefaultPage = () => redirectLoggedInTo(['']);

const routes: Routes = [
  { path: '', component: DefaultPageComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'game', component: DefaultPageComponent, ...canActivate(redirectUnauthorizedToLogin) },
  { path: 'login', component: LoginComponent, ...canActivate(redirectLoggedInToDefaultPage) },
  { path: 'addwords', component: AddWordsComponent, ...canActivate(adminOnly) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
