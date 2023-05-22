import { Injectable } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { env } from 'src/environments/env';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient){}

  private readonly baseUrl: string = env.baseUrl;
  cartItems: Product[] = [];

  addToCart(product: Product): void {
    this.cartItems.push(product);
  }

  getCartItems(): Product[] {
    return this.cartItems;
  }

  createCompra(data: any): Observable<any> {
    const url = `${this.baseUrl}/compras`;
    return this.http.post(url, data);
  }

  getUserId(token: string): string | null {
    try {
      const decodedToken: any = jwt_decode(token);
      return decodedToken.id || null;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }
}