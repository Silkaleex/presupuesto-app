import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/ingreso.servicio';
import { ReintegroServicio } from '../reintegro/reintegro.servicio';
import { Ingreso } from '../ingreso/ingreso.model';
import { Reintegro } from '../reintegro/reintegro.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  tipo: string = 'ingresoOperacion';
  descripcionInput: string | any;
  valorInput: number | any;

  constructor(
    private ingresoServicio: IngresoServicio,
    private reintegroServicio: ReintegroServicio
  ) {}

  ngOnInit() {}

  tipoOperacion(evento: any) {
    this.tipo = evento.target.value;
  }

  agregarValor() {
    if (this.tipo === 'ingresoOperacion')
      this.ingresoServicio.ingresos.push(
        new Ingreso(this.descripcionInput, this.valorInput)
      );
    else
      this.reintegroServicio.reintegros.push(
        new Reintegro(this.descripcionInput, this.valorInput)
      );
  }
}
/*Aqui creamos los datos para crear un formulario que escribamos un ingreso o reintegro 
primero creamos unas variables de toipo string llamado ingresoOperacion, descripcionInput
y valorInput en el constructor importamos IngresoServicio y ReintegroServicio
en tipoOperacion  le decimos que nos muestre el valor de tipo, y en agregar valor hacemos 
una condición if-else que SI tipo es igual a ingresoOperacion que a ingresServicio de ingresos me haga
El método push() añade los elementos especificados al final de una matriz y devuelve
la nueva longitud de la matriz, y me muestre la descripcion y el valor del input que le 
hemos creado y sino que me muestre la de reintegro
*/