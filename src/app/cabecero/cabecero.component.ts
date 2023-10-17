import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {
  
  
  @Input()
  presupuestoTotal: number | any;
  @Input()
  ingresoTotal: number | any;
  @Input()
  reintegroTotal: number | any;
  @Input()
  porcentajeTotal: number | any;


  constructor() { }

  ngOnInit(): void {
  }
/*Aqui Mostramos todos los datos del presupuesto, ingreso, reintegro y porcentaje total */
}
