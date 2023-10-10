import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControlerService } from '../user-controler.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})



export class LoginPage implements OnInit {


  me ={
    name:"",
    password:"",
    
  }


  constructor(private router :Router, private userControler : UserControlerService, public toastController: ToastController ) { 
 
  }

  ngOnInit() {
    
  }

 //toats de error
 async advertError(){

  const toast = await this.toastController.create({

    message: "Usuario no existente!",
    duration: 1000,
    position:"top"


  });
  toast.present()
}

titulo = "material-spin"
notificacion = 0;
showSpin = false;

//funcion que retrasa el tiempo de carga y muestra animacion de carga
loadD(){
  //inicia animacion
  this.showSpin =true;
  //retarda el tiempo en que se ejecuta lo de adentro
  setTimeout(() => {
    //termina la animacion de carga
    this.showSpin =false;
  }, 5000); 
}


//redicciona home
async goTohome(){

  const response = await this.userControler.validateLogin(this.me.name,this.me.password)

     
    if(response){  
      this.loadD();
      //hace que se demore en redigir a home 2 segundos
      setTimeout(() => {
        this.router.navigate(['/home']) 
      }, 2500);

    }else{    
      this.advertError();
    }

};
 
}
