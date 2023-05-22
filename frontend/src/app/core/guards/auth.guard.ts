import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(): boolean {

        const token = localStorage.getItem('jwt');

        if (!token) {
            Swal.fire({
                title: 'Acceso denegado',
                text: 'Debes iniciar sesión para acceder al carrito',
                icon: 'warning',
                confirmButtonText: 'Iniciar sesión',
            }).then(() => {
                this.router.navigate(['/auth/login']);
            });
            return false;
        }
        return true;
    }
}