import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent {

  constructor(
    private productService: ProductService
  ) { }

  comprasConProductos: any[] = [];

  ngOnInit() {
    this.getComprasConProductos();
  }

  getComprasConProductos(): void {
    this.productService.getComprasConProductos().subscribe(
      (data: any[]) => {
        this.comprasConProductos = data;
        console.log('Datos recibidos:', data);
      },
      (error: any) => {
        console.log(error);
      }
    );
  }

  calcularTotal(productos: any[]): number {
    return productos.reduce((total, producto) => total + producto.price, 0);
  }

}
