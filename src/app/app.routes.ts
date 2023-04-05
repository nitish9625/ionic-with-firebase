import { Routes } from '@angular/router';
import {
  canActivate,
  redirectLoggedInTo,
  redirectUnauthorizedTo
} from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = ()=> redirectLoggedInTo(['menu'])


export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/login/login.page').then( m => m.LoginPage),
    ...canActivate(redirectLoggedInToHome)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/register/register.page').then( m => m.RegisterPage)
  },
  {
    path: 'menu',
    loadChildren:() => import('./pages/menu/menu.routes').then((m)=> m.routes),
    ...canActivate(redirectUnauthorizedToLogin)

  },
  {
    path: 'add-doneter',
    loadComponent: () => import('./pages/add-doneter/add-doneter.page').then( m => m.AddDoneterPage),
    ...canActivate(redirectUnauthorizedToLogin)
  },
  {
    path: 'add-doneter/:id',
    loadComponent: () => import('./pages/add-doneter/add-doneter.page').then( m => m.AddDoneterPage),
    ...canActivate(redirectUnauthorizedToLogin)
  }






];
