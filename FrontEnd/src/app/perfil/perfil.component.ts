import { Component } from '@angular/core';
import { DatosService } from '../services/datos.servicio';
import { Router } from '@angular/router';
import { registro } from '../interfaces/registro';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss']
})
export class PerfilComponent {
  datos: registro[] = []
  constructor(private datosAdmin: DatosService, private router: Router) { }
  ngOnInit(): void {
    this.datosAdmin.consultarActivo().subscribe((data: registro[]) => {
      this.datos = data;
    });
  }
  submit(){
    this.datosAdmin.cerrarSesion(this.datos[0]).subscribe();
    this.router.navigate(['/']);
  }
}
