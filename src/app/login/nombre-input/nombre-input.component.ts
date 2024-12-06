import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nombre-input',
  templateUrl: './nombre-input.component.html',
  styleUrl: './nombre-input.component.css'
})
export class NombreInputComponent {
  nombre: string = '';
  nombreValido: boolean = false;

  constructor(private router: Router) { }

  validarNombre() {
    const regex = /^[a-zA-Z0-9\s]*$/;
    this.nombreValido = regex.test(this.nombre) && this.nombre.trim().length > 0;
  }

  iniciarAplicacion() {
    if (this.nombreValido) {
      this.router.navigate(['/Dashboard']);
    }
  }
}
