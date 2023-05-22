import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import { Observable, catchError, map, of, tap, throwError } from 'rxjs';

import { env } from 'src/environments/env';
import { LoginResponse, User } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly baseUrl: string = env.baseUrl;

  private http = inject(HttpClient);

  private _currentUser = signal<User | null>(null);

  public currentUser = computed(() => this._currentUser());



  constructor() { }

  private setAuth(user: User, token: string): boolean {

    // Establecer al usuario actual como autenticado
    this._currentUser.set(user);
    localStorage.setItem("token", token);

    return true;

  }


  login(email: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/auth/login`;
    const body = { email, password };

    // Realizar una solicitud para el inicio de sesión
    return this.http.post<LoginResponse>(url, body).pipe(

      map(({ user, token }) => this.setAuth(user, token)), // Llamar al método 'setAuth' para establecer la autenticación

      catchError(err => throwError(() => err.error.message))

    );

  }

  register(email: string, name: string, address: string, password: string): Observable<boolean> {

    const url = `${this.baseUrl}/auth/register`;
    const body = { email, name, address, password };

    return this.http.post<LoginResponse>(url, body).pipe(

      map(({ user, token }) => this.setAuth(user, token)),

      catchError(err => throwError(() => err.error.message))

    );

  }

}
