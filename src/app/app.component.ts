import { Component } from '@angular/core';
import { Ingreso } from './ingreso/ingreso.model';
import { Reintegro } from './reintegro/reintegro.model';
import { IngresoServicio } from './ingreso/ingreso.servicio';
import { ReintegroServicio } from './reintegro/reintegro.servicio';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  ingresos: Ingreso[] = [];
  reintegros: Reintegro[] = [];
  constructor(
    private ingresoServicio: IngresoServicio,
    private reintegroServicio: ReintegroServicio
    ) {
      this.ingresos = ingresoServicio.ingresos;
      this.reintegros = reintegroServicio.reintegros;
    }

  getIngresoTotal(){
    let ingresoTotal:number = 0;
    this.ingresos.forEach(ingreso =>{
      ingresoTotal += ingreso.valor
    })
    return ingresoTotal
  }
  getReintegroTotal(){
    let reintegroTotal:number = 0;
    this.reintegros.forEach(reintegro =>{
      reintegroTotal += reintegro.valor
    })
    return reintegroTotal
  }

  getPorcentajeTotal(){
    return this.getIngresoTotal() / this.getReintegroTotal();
  }

  getPresupuestoTotal(){
    return this.getIngresoTotal() - this.getReintegroTotal()
  }
}
