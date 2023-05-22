import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})

export class ProfileComponent {
  private router = inject(Router)


  logout() {
    Swal.fire("Sesión cerrada", "", "success");
    localStorage.removeItem('token');
    this.router.navigateByUrl("/core");
  }

}
