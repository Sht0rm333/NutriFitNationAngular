import { Component } from '@angular/core';
import { DatosService } from '../services/datos.servicio';
import { registro } from '../interfaces/registro';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  resultado: boolean = false;
  constructor(private datosAdmin: DatosService) { }
  ngOnInit(): void {
    this.datosAdmin.consultarActivo().subscribe((data: registro[]) => {
      if(data.length != 0){
        this.resultado = true
      }
      else{
        this.resultado = false
      }
    })
  }
}