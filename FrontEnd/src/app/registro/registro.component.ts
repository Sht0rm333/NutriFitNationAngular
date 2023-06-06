import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  resultado!: string;
  private emailPattern: any = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  formularioContacto = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(10)]),
    correo: new FormControl('', [Validators.required, Validators.minLength(5), Validators.pattern(this.emailPattern)]),
    altura: new FormControl('', [Validators.required, Validators.min(100)]),
    peso: new FormControl('', [Validators.required, Validators.min(20)]),
    contrasena: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmar: new FormControl('', [Validators.required])
  },/*{ validators: this.checkPasswords }*/
  );
  /*checkPasswords(group: FormGroup) {
    const contrasena = group.get('contrasena').value;
    const confirmar = group.get('confirmar').value;
    return contrasena === confirmar ? null : { notSame: true }
}*/
  submit() {
    if (this.formularioContacto.valid)
      this.resultado = "Todos los datos son válidos";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
