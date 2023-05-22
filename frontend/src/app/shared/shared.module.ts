import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';
import { Eror404PageComponent } from './pages/eror404-page/eror404-page.component';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';



@NgModule({
  declarations: [
    PagesComponent,
    PrimeNgComponent,
    Eror404PageComponent,
    Error404PageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
