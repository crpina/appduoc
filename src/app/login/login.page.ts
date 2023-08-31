import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserControlerService } from '../user-controler.service';

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

  constructor(private router :Router, private userControler : UserControlerService ) { 
 
  }

  ngOnInit() {
    
  }

  goTohome(){

   if(this.userControler.validateLogin(this.me.yo,this.me.password)) {

    this.router.navigate(['/home', this.me.yo])
   }else{

    
   }

  }

  Recuperar(){

  }
}
