import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login/login-page.component';
import { LoginGuard } from './login/login.guard';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'customer', canActivate: [LoginGuard], component: AppComponent },
    { path: '**', component: LoginPageComponent },
    { path: '', component: LoginPageComponent },
  ])],
  // imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule { }
