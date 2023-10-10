import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserControlerService, Usuario } from '../user-controler.service';
import { ObtenerUserService } from '../servicios/obtener-user.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario!: Usuario
  

  constructor(private activatedRoute: ActivatedRoute, private userS: UserControlerService ) {

  }

  ngOnInit(){
    this.usuario = this.userS.currentUsuer!;
  }

}
