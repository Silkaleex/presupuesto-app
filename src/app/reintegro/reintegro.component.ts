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
