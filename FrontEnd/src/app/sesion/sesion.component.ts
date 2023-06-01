import { Component } from '@angular/core';

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss']
})
export class SesionComponent {
  correo: string;
  contrasena: string;

  constructor() {}

  sesion() {
    console.log(this.correo);
    console.log(this.contrasena);
  }
}
