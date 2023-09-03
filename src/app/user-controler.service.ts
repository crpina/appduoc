import { Injectable } from '@angular/core';

export interface Usuario {
  name: String
  password: String
  categoria: String
}

@Injectable({
  providedIn: 'root'
})
export class UserControlerService {


  
 currentUsuer: Usuario | undefined;

  constructor() { }


  private usuarios: Usuario[]  = [{
    name:"Cristopher",
    password: "123",
    categoria: "Estudiante"
  },
  {
    name:"Jesus",
    password: "321",
    categoria: "Profesor"
  }]




  validateLogin(nama: String, password: String){

    for (const user of this.usuarios) {
      

      if(nama == user.name && password == user.password){  
        this.currentUsuer = user
        return true;
      }

    }
    return false;


  }

}
