import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginPageComponent } from './login-page.component';
import {MatDialog} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  constructor(private dialog:MatDialog ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean  {
      return this.checkLoggedIn(state.url); 
  }

  checkLoggedIn(url: string): boolean {
    this.dialog.open(LoginPageComponent); 
    return false;
  }
}