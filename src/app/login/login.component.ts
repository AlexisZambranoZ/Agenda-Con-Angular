import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = "";
  password: string = "";

  constructor(private router: Router) {}

  onSubmit() {
    // Lógica para comprobar si el nombre de usuario y la contraseña son válidos
    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Si las credenciales son válidas, redirigir a la página principal
      this.router.navigate(['/']);
    } else {
      // Si las credenciales no son válidas, mostrar un mensaje de error
      alert('Nombre de usuario o contraseña incorrectos');
    }
  }
}

