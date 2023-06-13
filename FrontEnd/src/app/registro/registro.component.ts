import { Component } from '@angular/core';
import { DatosService } from '../services/datos.servicio';
import { registro } from '../interfaces/registro';
import { FormGroup, FormControl, Validators } from '@angular/forms';

function validacionContrasena(control: any): Boolean {
  const contrasena = control.get('contrasena');
  const confirmar = control.get('confirmar');

  if (contrasena && confirmar && contrasena.value !== confirmar.value) {
    return true;
  }

  return false;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  datos:Array<registro>=[];
  formularioContacto!: FormGroup;
  constructor(private DatosRegistro:DatosService) {
    this.formularioContacto = new FormGroup({
      nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
      correo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
      altura: new FormControl('', [Validators.required, Validators.min(100)]),
      peso: new FormControl('', [Validators.required, Validators.min(20)]),
      contrasena: new FormControl('', [Validators.required, Validators.minLength(5)]),
      confirmar: new FormControl('', [Validators.required]),
      genero: new FormControl('', [Validators.required])
    },{ validators: validacionContrasena });
  }

  ngOnInit(): void {
    this.DatosRegistro.getJSON().subscribe(data=>{
       for(let i=0;i<data.length;i++)
             this.datos.push(data[i]);
       //console.log(this.datos);

    });
 }
  resultado!: string;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  /*formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    correo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
    altura: new FormControl('', [Validators.required, Validators.min(100)]),
    peso: new FormControl('', [Validators.required, Validators.min(20)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmar: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required])
  },{ validators: validacionContrasena });*/
  submit() {
    this.formularioContacto.removeControl("genero");
    this.formularioContacto.removeControl("confirmar");
    if (this.formularioContacto.valid){
      this.DatosRegistro.postUsuario(this.formularioContacto.value).subscribe();
      this.resultado = "Todos los datos son válidos";
    }
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}