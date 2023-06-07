import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  ngOnInit(): void {
  }
  calcularCalorias() {
    var altura: any = (<HTMLInputElement | null>document.getElementById("altura"))?.value;
    var peso: any = (<HTMLInputElement | null>document.getElementById("peso"))?.value;
    var edad: any = (<HTMLInputElement | null>document.getElementById("edad"))?.value;
    var sexo: any = (<HTMLInputElement | null>document.getElementById("sexo"))?.value;
    var actividad: any = (<HTMLInputElement | null>document.getElementById("actividad"))?.value;
    console.log(altura);
    console.log(peso);
    console.log(edad);
    console.log(sexo);
    console.log(actividad);
    if (sexo == 0) {
      var variableAuxiliar = (10 * peso) + (6.25 * altura) - (5 * edad) + 5;
      //Mantener
      var caloriasMantenerPeso = actividad * variableAuxiliar;
      Math.round(caloriasMantenerPeso * 1000) / 1000;
      var resul1: number = caloriasMantenerPeso;
      //0.5 kg menos
      var calorias1menos = caloriasMantenerPeso - 500;
      Math.round(calorias1menos * 1000) / 1000;
      var resul2: number = calorias1menos;
      //1 kg menos
      var calorias2menos = caloriasMantenerPeso - 1000;
      Math.round(calorias2menos * 1000) / 1000;
      var resul3: number = calorias2menos;
      //0.5 kg más
      var calorias1mas = caloriasMantenerPeso + 500;
      Math.round(calorias1mas * 1000) / 1000;
      var resul4: number = calorias1mas;
      //1 kg más
      var calorias2mas = caloriasMantenerPeso + 1000;
      Math.round(calorias2mas * 1000) / 1000;
      var resul5: number = calorias2mas;
    }
    else {
      var variableAuxiliar = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
      //Mantener
      var caloriasMantenerPeso = actividad * variableAuxiliar;
      Math.round(caloriasMantenerPeso * 1000) / 1000;
      var resul1: number = caloriasMantenerPeso;
      //0.5 kg menos
      var calorias1menos = caloriasMantenerPeso - 500;
      Math.round(calorias1menos * 1000) / 1000;
      var resul2: number = calorias1menos;
      //1 kg menos
      var calorias2menos = caloriasMantenerPeso - 1000;
      Math.round(calorias2menos * 1000) / 1000;
      var resul3: number = calorias2menos;
      //0.5 kg más
      var calorias1mas = caloriasMantenerPeso + 500;
      Math.round(calorias1mas * 1000) / 1000;
      var resul4: number = calorias1mas;
      //1 kg más
      var calorias2mas = caloriasMantenerPeso + 1000;
      Math.round(calorias2mas * 1000) / 1000;
      var resul5: number = calorias2mas;
    }
    let pesoA: number[] = [resul1, resul2, resul3, resul4, resul5];
    for (let index = 0; index < pesoA.length; index++) {
      console.log(pesoA[index]);
    }
  }
}