import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { CartService } from 'src/app/services/cart.service';
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
  ) {
    this.cartProducts = JSON.parse(localStorage.getItem("cartItems") || "[]");
  }

  compra() {
    if (this.cartProducts.length === 0) {
      return;
    }

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
          localStorage.removeItem('cartItems');
          this.cartProducts = JSON.parse(localStorage.getItem("cartItems") || "[]");
          this.cartService.cartItems = [];
          localStorage.setItem('cartItems', JSON.stringify(this.cartProducts));
          this.cartService.updateCartItemCount();
        },
        (error) => {
          Swal.fire('Error en la compra', error.message, 'error');
        }
      );
  }

  removeFromCart(index: number): void {
    const removedProduct = this.cartProducts[index];
    this.cartProducts.splice(index, 1);
    this.cartService.cartItems = this.cartProducts;

    localStorage.setItem('cartItems', JSON.stringify(this.cartProducts));
    this.cartService.updateCartItemCount();
    Swal.fire({
      icon: 'success',
      title: 'Producto eliminado',
      text: `Se ha eliminado ${removedProduct.name} del carrito.`,
      showConfirmButton: false,
      timer: 1500
    });

  }

  getTotalPrice(): number {
    return this.cartProducts.reduce((total, product) => total + product.price, 0);
  }

}



