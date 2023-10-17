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
/*creamos variables de ingresos y reintegros con datos vacios, 
despues extraemos los datos de creados en el componeente de servicio de reintegro y ingresos.
Luego en el metodo de getIngresoTotal y getReintegroTotal le asignamos el tipo number
que es el valor numerico que vamos a usar en este caso, ahora usamos El método forEach() ejecuta la 
función indicada una vez por cada elemento del array, cogiendo el ingreso y reintegro 
que es el valor de cada variable que creamos antes con sus datos y haga una operacion
de la suma sea igual tanto reintegroToal como reintegro.valor(dato que creamos en el componente 
servicio de reintegro y ingreso).
Calculamos los porcentajes  dividiendo getIngresoTotal y getReintegroTotal.
Por ultimo hacemos un presupuesto total restanto de getIngresoTotal y getReintegroTotal
*/