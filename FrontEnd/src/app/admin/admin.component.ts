import { Component } from '@angular/core';
import { DatosService } from '../services/datos.servicio';
import { sesion } from '../interfaces/sesion';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  datos: Array<sesion> = [];
  text: any;
  constructor(public ServicioRegistro: DatosService) { 
  }
  ngOnInit(): void {
    this.ServicioRegistro.getJSON().subscribe(data => {
      for (let i = 0; i < data.length; i++){
        this.datos.push(data[i]);
      }
      this.text = this.datos[0].correo + " " + this.datos[0].contrasena + " ";
      for (let i = 1; i < this.datos.length; i++){
        this.text += this.datos[i].correo + " " + this.datos[i].contrasena + " ";
      }
    });
  }
}
