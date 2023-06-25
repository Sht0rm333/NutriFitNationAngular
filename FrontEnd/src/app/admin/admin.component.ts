import { Component } from '@angular/core';
import { DatosService } from '../services/datos.servicio';
import { registro } from '../interfaces/registro';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  datos: Array<registro> = [];
  text: any;
  constructor(public ServicioRegistro: DatosService) { 
  }
  ngOnInit(): void {
    this.ServicioRegistro.consultarUsuarios().subscribe(data => {

      console.log(data);
    });
  }
}
