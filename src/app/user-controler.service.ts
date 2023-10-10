import { Injectable } from '@angular/core';
import { ObtenerUserService } from './servicios/obtener-user.service';
import {
  BehaviorSubject,
  Observable,
} from 'rxjs';
import { promises } from 'dns';

export interface Usuario {
  id: number,
  name: string,
  apellido: string,
  categoria: string,
  sede: string,
  telefono: string,
  carrera: string
}

@Injectable({
  providedIn: 'root'
})
export class UserControlerService {


  
  currentUsuer: Usuario = { id: 0, name: "", apellido: "", categoria: "", sede: "", telefono: "", carrera: "" };

  constructor(private api:ObtenerUserService) { }


  async validateLogin(nama: string, password: string):Promise <boolean>{

       

    const response = this.api.getPosts(nama,password).toPromise().then((res)=>{
      //Agregado por mi
      //llama a la base de datos por name  y password, guardo los datos en userCurrent.
      
      this.currentUsuer.id = res.items[0].id;
      this.currentUsuer.name = res.items[0].name;
      this.currentUsuer.apellido = res.items[0].apellido;
      this.currentUsuer.categoria = res.items[0].categoria;
      this.currentUsuer.sede = res.items[0].sede;
      this.currentUsuer.telefono = res.items[0].telefono;
      this.currentUsuer.carrera = res.items[0].carrera;
      
      
      //comenta para que no aparesca en consola =
      console.log(Object.keys(res));
      console.log(res.items);
      console.log("Lista que guardo");
      console.log(this.currentUsuer.id,this.currentUsuer.name, this.currentUsuer.apellido, this.currentUsuer.categoria, this.currentUsuer.sede, this.currentUsuer.telefono, this.currentUsuer.carrera);
     
      return true;

    }).catch((error)=>{
      //muestra error por consola. 
      console.log(error);
      return false;
      
    });

    return response;
    
}

}
