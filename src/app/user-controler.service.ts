import { Injectable } from '@angular/core';

interface Usuario {
  name: String
  password: String
  categoria: String
}

@Injectable({
  providedIn: 'root'
})
export class UserControlerService {


  constructor() { }


  private usuario: Usuario  = {
    name:"Cristopher",
    password: "123",
    categoria: "Estudiante"
  }

  
  setNameUsuario(inPutName: String){
    this.usuario.name= inPutName;
  }

  getNameUsuario():String{
    return this.usuario.name;
  }

  getCategoria():String{
    return this.usuario.categoria;
  }

  setPassword(inPutPassword: String){
    this.usuario.password= inPutPassword;
  }

  getPassword():String{
    return this.usuario.password;
  }

  getUsuario():Usuario{
    return this.usuario;
  }

  validateLogin(nama: String, password: String){

    if(nama == this.usuario.name && password == this.usuario.password){

      return true;
    }else{
      return false;
    }

  }

}
