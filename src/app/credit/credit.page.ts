import { Component, OnInit } from '@angular/core';
import { Credit } from '../models/credit.model';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
})
export class CreditPage implements OnInit {

  credito: Credit;
  fechaActual: Date = new Date();
  solicitado: Boolean = false;
  respuesta: string;
  aprobado: Boolean;

  constructor(
  ) { }

  ngOnInit() {
    this.credito = new Credit();
  }

  solicitar(){
    this.credito.fechaIngreso = new Date(this.credito.fechaIngreso);
    this.solicitado = true;
    let fechaMinPermanencia: Date = this.obtenerFechaMinEmpresa();
    if(this.credito.fechaIngreso.getTime() < fechaMinPermanencia.getTime()){
      if(this.credito.salario < 800000) {
        this.respuesta = 'Su salario debe ser superior a $800.000';
        this.aprobado = false;
      } else if(this.credito.salario >= 800000 && this.credito.salario < 1000000) {
        this.respuesta = 'Su crédito ha sido aprobado por $5.000.000';
        this.aprobado = true;
      } else if(this.credito.salario >= 1000000 && this.credito.salario < 4000000) {
        this.respuesta = 'Su crédito ha sido aprobado por $20.000.000';
        this.aprobado = true;
      } else {
        this.respuesta = 'Su crédito ha sido aprobado por $50.000.000';
        this.aprobado = true;
      }
    }else{
      this.respuesta = 'Debe permanecer más de un año y medio laborando en la empresa';
      this.aprobado = false;
    }
  }

  obtenerFechaMinEmpresa(){
    let fechaMin = new Date();
    fechaMin.setFullYear(this.fechaActual.getFullYear() - 1);
    fechaMin.setMonth(this.fechaActual.getMonth() - 6);
    return fechaMin;
  }

  reset(){
    this.solicitado = false;
    this.credito = new Credit();
  }
}
