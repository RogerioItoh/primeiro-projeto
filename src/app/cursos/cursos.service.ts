import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

@Injectable()
export class CursosService {

  constructor() { }

  getCursos(){
    
    return ['Java' , 'Curso 1' , 'Curso 2', 'Curso 3'];

  }

}
