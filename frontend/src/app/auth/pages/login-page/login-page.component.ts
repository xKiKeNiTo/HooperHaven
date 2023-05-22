import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styles: []
})
export class LoginPageComponent {

  private fb = inject(FormBuilder);
  private authService = inject(AuthService);
  private router = inject(Router)

  public form: FormGroup = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(6)]],
  });

  login() {
    const { email, password } = this.form.value;

    this.authService.login(email, password)
      .subscribe({

        next: () => {
          Swal.fire("Inicio de sesión exitoso", "", "success");
          this.router.navigateByUrl("/core");
        },

        error: (message) => {
          Swal.fire("Error", message, "error")
        }

      })

  }

}
