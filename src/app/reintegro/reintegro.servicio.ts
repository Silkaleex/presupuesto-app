import { Reintegro } from './reintegro.model';

export class ReintegroServicio {
  reintegros: Reintegro[] = [
    new Reintegro('Renta Depto', 900),
    new Reintegro('Ropa', 200),
  ];

  eliminar(reintegro:Reintegro){
    const indice:number = this.reintegros.indexOf(reintegro)
    this.reintegros.splice(indice,1)
  }
}

/*
En este componente creamos los datos de reintegro y creamos una funcion de eliminar con
indexOf hace compara otros valores de reintegro y  método splice de las instancias de Array
cambia el contenido de un array eliminando o reemplazando elementos existentes y/o
añadiendo nuevos elementos en su lugar.
 */