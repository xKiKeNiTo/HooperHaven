import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';
import Swal from 'sweetalert2';
import { CartService } from '../../../services/cart.service';

@Component({
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent {

  items: MenuItem[];

  cartItemCount: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService
  ) { this.items = [] }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Ropa',      
        items: [
          { 
            label: 'Pantalones',
            command: () => this.navigateToProductsByCategory('pantalones')
          },
          {
            label: 'Camisetas',
            command: () => this.navigateToProductsByCategory('camisetas')
          },
        ]
      },

      {
        label: 'Zapatillas',
        command: () => this.navigateToProductsByCategory('zapatillas')
      },
      {
        label: 'Accesorios',
        command: () => this.navigateToProductsByCategory('accesorios')
      }
    ];
    this.cartItemCount = this.cartService.getCartItemCount();
    this.cartService.cartItemCount$.subscribe(count => {
      this.cartItemCount = count;
    });

    if (localStorage.getItem("token")) {
      this.showLogoutButton = true;
    } 

  }

  showLogoutButton = false;

  navigateToProductsByCategory(category: string): void {
    this.router.navigate(['/core/product-list'], { queryParams: { category: category } });
  }

  private authService = inject(AuthService);

  public user = computed(() => this.authService.currentUser());

  changeAriaLabelLogin(): string {
    if (localStorage.getItem('token')) {
      return "Ir al perfil"
    }
    return "Ir al login"
  }

  redirect(): void {
    const token = localStorage.getItem('token');
    if (token) {
      this.router.navigate(['/core/profile']);
    } else {
      this.router.navigate(['/auth/login']);
    }
  }

  logout(): void {
    localStorage.clear()
    this.router.navigate(['/core/home']);
    Swal.fire('Sesión cerrada', 'Has cerrado sesión exitosamente', 'success');
    this.showLogoutButton = false
  }

}
