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
