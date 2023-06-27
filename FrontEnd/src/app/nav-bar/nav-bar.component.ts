import { Component } from '@angular/core';
import { DatosService } from '../services/datos.servicio';
import { registro } from '../interfaces/registro';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  resultado: boolean;
  admin:boolean;
  datos: registro[] = []
  constructor(private datosAdmin: DatosService) { }
  ngOnInit(): void {
    this.datosAdmin.consultarActivo().subscribe((data: registro[]) => {
      if(data[0].Activo == 1){
        this.resultado = true
        this.datosAdmin.consultarAdmin(data[0]).subscribe((dat: registro[])=>{
          if(dat[0].Admin == 1){
            this.admin = true
          }else{
            this.admin = false
          }
        })
      }
      else{
        this.resultado = false
      }
    })
  }
}