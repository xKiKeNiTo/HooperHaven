import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styles: []
})
export class ProductInfoComponent implements OnInit {

  product: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      const productId = params['id'];
      this.loadProduct(productId);

    });

  }

  loadProduct(productId: string): void {

    this.productService.getProductById(productId)

      .subscribe(

        data => {

          this.product = data;
          console.log(this.product);

        },

        error => {

          console.error(error);

        }

      );

  }

  addToCart(): void {
    const token = localStorage.getItem('token');
  
    if (token) {
      this.cartService.addToCart(this.product);
      this.cartService.updateCartItemCount();
      Swal.fire('Añadido al carrito', '', 'success');
    } else {
      Swal.fire('Error', 'Debes iniciar sesión para añadir productos al carrito', 'error');
    }
  }

}
