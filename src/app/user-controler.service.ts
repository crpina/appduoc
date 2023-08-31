import { Injectable } from '@angular/core';

interface Usuario {
  name: String
  password: String
}

@Injectable({
  providedIn: 'root'
})
export class UserControlerService {

  constructor() { }


  private usuario: Usuario  = {
    name:"Cristopher",
    password: "123"
  }


  setNameUsuario(inPutName: String){
    this.usuario.name= inPutName;
  }

  getNameUsuario():String{
    return this.usuario.name;
  }

  setPassword(inPutPassword: String){
    this.usuario.password= inPutPassword;
  }

  getPassword():String{
    return this.usuario.password;
  }

  validateLogin(nama: String, password: String){

    if(nama == this.usuario.name && password == this.usuario.password){

      return true;
    }else{
      return false;
    }

  }

}
