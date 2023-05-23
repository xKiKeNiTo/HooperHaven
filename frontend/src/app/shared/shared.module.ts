import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages/pages.component';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';



@NgModule({
  declarations: [
    PagesComponent,
    PrimeNgComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
