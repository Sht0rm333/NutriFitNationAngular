import { Component } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.scss']
})
export class CalculadoraComponent {
  /*ngOnInit(): void {
  }*/
public resul1: number;
public resul2: number;
public resul3: number;
public resul4: number;
public resul5: number;

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
      this.resul1 = caloriasMantenerPeso;
      //0.5 kg menos
      var calorias1menos = caloriasMantenerPeso - 500;
      Math.round(calorias1menos * 1000) / 1000;
      this.resul2 = calorias1menos;
      //1 kg menos
      var calorias2menos = caloriasMantenerPeso - 1000;
      Math.round(calorias2menos * 1000) / 1000;
      this.resul3 = calorias2menos;
      //0.5 kg más
      var calorias1mas = caloriasMantenerPeso + 500;
      Math.round(calorias1mas * 1000) / 1000;
      this.resul4 = calorias1mas;
      //1 kg más
      var calorias2mas = caloriasMantenerPeso + 1000;
      Math.round(calorias2mas * 1000) / 1000;
      this.resul5 = calorias2mas;
    }
    else {
      var variableAuxiliar = (10 * peso) + (6.25 * altura) - (5 * edad) - 161;
      //Mantener
      var caloriasMantenerPeso = actividad * variableAuxiliar;
      Math.round(caloriasMantenerPeso * 1000) / 1000;
      this.resul1 = caloriasMantenerPeso;
      //0.5 kg menos
      var calorias1menos = caloriasMantenerPeso - 500;
      Math.round(calorias1menos * 1000) / 1000;
      this.resul2 = calorias1menos;
      //1 kg menos
      var calorias2menos = caloriasMantenerPeso - 1000;
      Math.round(calorias2menos * 1000) / 1000;
      this.resul3 = calorias2menos;
      //0.5 kg más
      var calorias1mas = caloriasMantenerPeso + 500;
      Math.round(calorias1mas * 1000) / 1000;
      this.resul4 = calorias1mas;
      //1 kg más
      var calorias2mas = caloriasMantenerPeso + 1000;
      Math.round(calorias2mas * 1000) / 1000;
      this.resul5 = calorias2mas;
    }
  }
}