import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';
import { HttpClient } from '@angular/common/http';
import { env } from 'src/environments/env';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})

export class CartComponent {
  cartProducts: Product[];
  token = localStorage.getItem('token');

  data = {
    userId: '',
    productsIds: [] as string[],
    fecha: ''
  };

  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) {
    this.cartProducts = this.cartService.getCartItems();


  }

  compra() {
    this.data.productsIds = this.cartProducts.map(product => product._id);

    if (this.token) {
      const userId = this.cartService.getUserId(this.token);
      if (userId !== null) {
        this.data.userId = userId;
      }
    }

    const fechaActual = new Date();
    this.data.fecha = fechaActual.toISOString();

    console.log(this.data);

    this.cartService.createCompra(this.data)
    .subscribe(
      () => {
        Swal.fire('Compra exitosa', '¡Compra realizada correctamente!', 'success');
      },
      (error) => {
        Swal.fire('Error en la compra', error.message, 'error');
      }
    );
  }
}



