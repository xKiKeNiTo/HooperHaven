import { Injectable } from '@angular/core';
import { Product } from '../core/interfaces/product.interface';
import jwt_decode from 'jwt-decode';
import { Observable } from 'rxjs';
import { env } from 'src/environments/env';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  private readonly baseUrl: string = env.baseUrl;

  cartItems: Product[] = [];

  private cartItemCountSubject: Subject<number> = new Subject<number>();
  cartItemCount$ = this.cartItemCountSubject.asObservable();

  addToCart(product: Product): void {
    this.cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(this.cartItems));

    this.cartItemCountSubject.next(this.cartItems.length);
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

  getCartItemCount(): number {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems).length : 0;
  }

  updateCartItemCount(): void {
    const cartItemCount = this.getCartItemCount();
    this.cartItemCountSubject.next(this.cartItems.length);
    localStorage.setItem('cartItemCount', cartItemCount.toString());
    console.log(cartItemCount);
  }

}