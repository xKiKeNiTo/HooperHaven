import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule),
  },
  {
    path: "core",
    loadChildren: () => import("./core/core.module").then(m => m.CoreModule),
  },
  {
    path: "",
    redirectTo: "core",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
