import { Component, OnInit } from '@angular/core';
import { UserControlerService, Usuario } from '../user-controler.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  usuario!: Usuario;

  constructor(private userS: UserControlerService) { }

  ngOnInit() {
    this.usuario = this.userS.currentUsuer!
  }

}
