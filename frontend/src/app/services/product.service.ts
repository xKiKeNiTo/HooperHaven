import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import jwt_decode from 'jwt-decode';
import { env } from 'src/environments/env';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly baseUrl: string = `${env.baseUrl}/products`;

  constructor(private http: HttpClient) { }

  getProductsByCategory(category: string): Observable<any> {
    const url = `${this.baseUrl}/byCategory/${category}`;
    return this.http.get(url);
  }

  getProductById(id: string): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get(url);
  }

  getAllProducts(): Observable<any> {
    const url = `${this.baseUrl}`;
    return this.http.get(url);
  }

  getComprasConProductos(): Observable<any[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      throw new Error('Token not found');
    }
    const decodedToken : any = jwt_decode(token);
    const userId = decodedToken.id;

    const url = `${this.baseUrl}/user/${userId}`;
    return this.http.get<any[]>(url);
  }
}