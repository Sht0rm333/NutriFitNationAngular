import { Component } from '@angular/core';
import { DatosService } from '../services/datos.servicio';
import { registro } from '../interfaces/registro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  datos: registro[] = [];
  constructor(private ServicioRegistro: DatosService, private router: Router) {
  }
  ngOnInit(): void {
    this.ServicioRegistro.consultarUsuarios().subscribe((data: registro[]) => {
      for (let i = 0; i < data.length; i++) {
        if (data[i].Activo == 0) {
          if (data[i].Admin == 0) {
            this.datos.push(data[i]);
          }
        }
      }
    });
  }

  delete(index: any) {
    console.log(this.datos[index].Email);
    this.ServicioRegistro.delete(this.datos[index].Email).subscribe(data => {
      console.log(data.mensaje)
      this.router.navigate(['/admin'])
    });
  }
}
