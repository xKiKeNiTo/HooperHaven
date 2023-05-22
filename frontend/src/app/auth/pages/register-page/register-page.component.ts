import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styles: []
})
export class RegisterPageComponent {
  public form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: [' '],
      address: [' '],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  register() {
    const { email, name, address, password } = this.form.value;

    this.authService.register(email, name, address, password)
      .subscribe({
        next: () => {
          Swal.fire('Registro exitoso', '¡Sesión iniciada!', 'success');
          this.router.navigateByUrl('/core');
        },
        error: (message) => {          
          Swal.fire('Error', message, 'error');
        }
      });
  }
}