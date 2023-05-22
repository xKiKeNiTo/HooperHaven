import { Component, computed, inject } from '@angular/core';
import { Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  templateUrl: './layout.component.html',
  styles: []
})
export class LayoutComponent {

  items: MenuItem[];

  constructor(private router: Router) { this.items = [] }

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
  }

  navigateToProductsByCategory(category: string): void {
    this.router.navigate(['/core/product-list'], { queryParams: { category: category } });
  }

  private authService = inject(AuthService);

  public user = computed(() => this.authService.currentUser());

  redirect() {
    const token = localStorage.getItem('token'); // Obtiene el token del localStorage
    if (token) {
      // El token existe, por lo tanto el usuario está autenticado
      console.log(token);
      this.router.navigate(['/core/profile']); // Redirige al usuario a la página de perfil
    } else {
      this.router.navigate(['/auth/login']);
    }

  }

}
