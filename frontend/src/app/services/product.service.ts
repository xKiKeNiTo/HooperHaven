import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../core/interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProductsByCategory(category: string): Observable<any> {
    const url = `${this.apiUrl}/byCategory/${category}`;
    return this.http.get(url);
  }

  getProductById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url);
  }

  getAllProducts(): Observable<any> {
    const url = `${this.apiUrl}`;
    return this.http.get(url);
  }
}