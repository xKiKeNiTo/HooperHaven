import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductInfoComponent } from './pages/product-info/product-info.component';
import { AuthGuard } from './guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {
    path: "",
    component: LayoutComponent,
    children: [
      { path: "home", component: HomeComponent },
      { path: "cart", component: CartComponent, canActivate: [AuthGuard] },
      { path: "product-list", component: ProductListComponent },
      { path: "product-info/:id", component: ProductInfoComponent },
      { path: "profile", component: ProfileComponent },
      { path: "**", redirectTo: "home" },
      { path: ":id", component: ProductListComponent },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
