import { Component } from '@angular/core';
import { UserControlerService, Usuario } from '../user-controler.service';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario!: Usuario;
  

  constructor(private userS: UserControlerService,private router: Router  ) {

  }

  ngOnInit(){
    this.usuario = this.userS.currentUsuer!;
  }

  async ionViewWillEnter(){
    this.usuario = this.userS.currentUsuer!;
  }

  async salirLogin(){

    localStorage.removeItem('ingresado');
    await this.router.navigate(['/login'])

  }

  
     
  
}
