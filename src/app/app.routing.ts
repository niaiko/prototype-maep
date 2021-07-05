import { LoginComponent } from './account/login/login.component';
import { AuthGuard } from './helper/auth.guard';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {RegisterComponent} from "./account/register/register.component";
import {ProfilIndividusComponent} from "./profil-individus/profil-individus.component";

const routes: Routes =[
  { path: 'login', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  // {
  //   path: '',
  //   redirectTo: 'dashboard',
  //   pathMatch: 'full',
  // }, 
  {
    path: '',
    component: AdminLayoutComponent,
    children: [{
      path: '',
      loadChildren: './layouts/admin-layout/admin-layout.module#AdminLayoutModule'
    }],
     canActivate:[AuthGuard]
  },
  { path: 'profileIndividu', component: ProfilIndividusComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
       useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
