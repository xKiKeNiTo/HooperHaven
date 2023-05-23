import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styles: []
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  category: string = "";

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router,
    private cartService: CartService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.category = params['category'];
      this.loadProductsByCategory(this.category);
    });
  }

  loadProductsByCategory(category: string): void {
    this.productService.getProductsByCategory(category)
      .subscribe(
        data => {
          this.products = data;
          console.log(this.products);
        },
        error => {
          console.error(error);
        }
      );
  }

  redirectToProductInfo(productId: string): void {
    this.router.navigate(['core/product-info', productId]);
  }

  addToCart(product: Product): void {

    const token = localStorage.getItem('token');

    if (token) {
      this.cartService.addToCart(product);
      this.cartService.updateCartItemCount();
      Swal.fire('Añadido al carrito', '', 'success');
    } else {
      Swal.fire('Error', 'Debes iniciar sesión para añadir productos al carrito', 'error');
    }
  }

}