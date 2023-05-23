import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { DataViewModule, DataViewLayoutOptions } from 'primeng/dataview';
import { CarouselModule } from 'primeng/carousel';
import { BadgeModule } from 'primeng/badge';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CardModule,
    MenubarModule,
    ButtonModule,
    PasswordModule,
    InputTextModule,
    DividerModule,
    DataViewModule,
    CarouselModule,
    BadgeModule
  ]
})
export class PrimeNgModule { }
