import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, } from '@angular/forms';

function validacionContrasena(control: any): { [key: string]: boolean } | null {
  const contrasena = control.get('contrasena');
  const confirmar = control.get('confirmar');

  if (contrasena && confirmar && contrasena.value !== confirmar.value) {
    return { 'validacionContrasena': true };
  }

  return null;
}

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  constructor(private http: HttpClient){}
  callGetMethod(){
    const url = '../datos.json';
    this.http.get<any>(url).subscribe(
      Response=>{
        console.log('datos recibidos:',Response);
      },
      error=>{
        console.error('error:',error);
      }
    )
  }
  resultado!: string;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    correo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
    altura: new FormControl('', [Validators.required, Validators.min(100)]),
    peso: new FormControl('', [Validators.required, Validators.min(20)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmar: new FormControl('', [Validators.required]),
    genero: new FormControl('', [Validators.required])
  },{ validators: validacionContrasena });
  submit() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}