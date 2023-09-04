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
  
  loadD(){

    this.showSpin =true;
    setTimeout(() => {
      this.showSpin =false;
    }, 5000); 
  }



  goTohome(){

     

    if(this.userControler.validateLogin(this.me.name,this.me.password) ) {
      this.loadD();
      
      setTimeout(() => {
        this.router.navigate(['/home']) 
      }, 2500);

      
   }else{    
     this.advertError();
   }

  }

 
}
