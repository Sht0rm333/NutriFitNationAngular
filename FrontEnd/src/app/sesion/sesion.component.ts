import { Component } from '@angular/core';
import { DatosService } from '../services/datos.servicio';
import { registro } from '../interfaces/registro';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-sesion',
  templateUrl: './sesion.component.html',
  styleUrls: ['./sesion.component.scss']
})
export class SesionComponent {
  datos: Array<registro> = [];
  formularioContacto!: FormGroup;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  constructor(private ServicioSesion: DatosService,private router: Router) { 
    this.siteKey='6LcLsMgmAAAAAP7GuCH-TmOql6JCxhyIDJpA5PFR';
    this.formularioContacto = new FormGroup({
      correo: new FormControl('', [Validators.required, Validators.pattern(this.emailPattern)]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(5)]),
      recaptcha: new FormControl('', [Validators.required])
    });
  }
  ngOnInit(): void {
  }
  siteKey: string;
  resultado!: string;
  submit() {
    this.formularioContacto.removeControl('recaptcha');
    if (this.formularioContacto.valid){
      this.ServicioSesion.correoClaveUsuario(this.formularioContacto.value).subscribe((data: registro[]) => {
        if(data.length == 0){
          this.resultado = "Su correo o clave no son validos";
        }else{
          this.ServicioSesion.usuarioActivo(this.formularioContacto.value).subscribe();
          this.resultado = "Se inicio sesión con exito";
          setTimeout(() => {
            this.router.navigate(['/']);
          }, 1000);
        }
      });
    }
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
