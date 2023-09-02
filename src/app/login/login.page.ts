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

  me={
    yo:"",
    password:""
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


  goTohome(){

   if(this.userControler.validateLogin(this.me.yo,this.me.password) ) {
      this.router.navigate(['/home', this.me.yo])
   }else{    
     this.advertError();
   }

  }

 
}
