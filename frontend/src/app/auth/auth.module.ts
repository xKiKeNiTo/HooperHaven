import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginPageComponent,
    RegisterPageComponent,
    LayoutComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    PrimeNgModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
