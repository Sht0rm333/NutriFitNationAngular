import { Component } from '@angular/core';
import { DatosService } from '../services/datos.servicio';
import { sesion } from '../interfaces/sesion';
import { FormGroup, FormControl, Validators } from '@angular/forms';

function validacionCuenta(correo: string, contrasena: string, datos: any): boolean {
  const primerDato = datos[0];
  const correoBD = primerDato.correo;
  const contrasenaBD = primerDato.contrasena;
  if (correo! == correoBD && contrasena! == contrasenaBD) {
    return true;
  }
  return false;
}

@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss']
})
export class SesionComponent {
  datos: Array<sesion> = [];
  constructor(private ServicioRegistro: DatosService) { }
  ngOnInit(): void {
    this.ServicioRegistro.getJSON().subscribe(data => {
      for (let i = 0; i < data.length; i++){
        this.datos.push(data[i]);
      }
    });
  }
  resultado!: string;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  formularioContacto = new FormGroup({
    correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(5)])
  });
  submit() {
    if (this.formularioContacto.valid){
      let correo = this.formularioContacto.get('correo')?.value!;
      let contrasena = this.formularioContacto.get('contrasena')?.value!;
      if(validacionCuenta(correo, contrasena, this.datos) == true)
        this.resultado = "Todos los datos son válidos";
      else
        this.resultado = "Correo o contraseña no validas";
    }
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
