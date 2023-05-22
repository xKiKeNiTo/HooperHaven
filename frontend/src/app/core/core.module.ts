import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { PrimeNgModule } from '../shared/prime-ng/prime-ng.module';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HomeComponent,
    CartComponent,
    ProductListComponent,
    ProductInfoComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    PrimeNgModule
  ]
})
export class CoreModule { }
