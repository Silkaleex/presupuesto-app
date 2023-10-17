import { Component, Input, OnInit } from '@angular/core';
import { Reintegro } from './reintegro.model';
import { ReintegroServicio } from './reintegro.servicio';

@Component({
  selector: 'app-reintegro',
  templateUrl: './reintegro.component.html',
  styleUrls: ['./reintegro.component.css'],
})
export class ReintegroComponent implements OnInit {
  reintegros: Reintegro[] = [];
  @Input() ingresoTotal!: number;

  constructor(private reintegroServicio: ReintegroServicio) {}

  ngOnInit() {
    this.reintegros = this.reintegroServicio.reintegros;
  }
  eliminarReintegro(reintegro: Reintegro) {
    this.reintegroServicio.eliminar(reintegro);
  }
  calcularPorcentaje(reintegro: Reintegro) {
    return reintegro.valor / this.ingresoTotal;
  }
}
/*
creamos otros valores en un array en reintegros.
cogemos ingreso total que son valores que tenemos en creados en app.component.
cogemos los datos de ReintegroServicio.ts.
Unimos estos datos en ngOninit(Método de devolución de llamada que se invoca inmediatamente después 
   de que el detector de cambios predeterminado haya comprobado por primera vez las propiedades 
   vinculadas a datos de la directiva, y antes de que se haya comprobado ninguno de los hijos
   de vista o contenido. Sólo se invoca una vez al instanciar la directiva.)
    de reintegros y reintegroServicio que es un parametro para manejar en nuestro componente
creamos aqui.
hacemos una funcion de eliminar reintegro para eliminar los datos que no necesitemos
y por ultimo hacemos una funcion de calcularPorcentaje dividiendo el ingresoTOtal entre el reintegro.valor
*/