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

