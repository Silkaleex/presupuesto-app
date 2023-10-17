import { Ingreso } from './ingreso.model';

export class IngresoServicio {
  ingresos: Ingreso[] = [
    new Ingreso('salario', 4000),
    new Ingreso('venta de coche', 500),
  ];
  eliminar(ingreso:Ingreso){
    const indice:number = this.ingresos.indexOf(ingreso)
    this.ingresos.splice(indice,1)
  }
}
/*
En este componente creamos los datos de ingreso y creamos una funcion de eliminar con
indexOf hace compara otros valores de ingreso y  método splice de las instancias de Array
cambia el contenido de un array eliminando o reemplazando elementos existentes y/o
añadiendo nuevos elementos en su lugar.
 */