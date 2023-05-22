import { Component } from '@angular/core';
import { Product } from '../../interfaces/product.interface';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent {
  products: Product[] = [];
  category: string = "";



  constructor(
    private productService: ProductService,
    private router: Router

  ) { }

  responsiveOptions: any[] = [
    {
      breakpoint: '426px',
      orientation: 'vertical',
      numVisible: 1,
      numScroll: 1,
      verticalViewPortHeight: "360px"
    }
  ]

  ngOnInit(): void {
    this.loadAllProducts();
  }

  loadAllProducts(): void {
    this.productService.getAllProducts().subscribe(
      (data: Product[]) => {
        this.products = data;
        console.log(this.products);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  redirectToProductInfo(productId: string): void {
    this.router.navigate(['core/product-info', productId]);
  }
}
