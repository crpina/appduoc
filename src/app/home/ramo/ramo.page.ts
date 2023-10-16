import { Component, OnInit } from '@angular/core';
import { Ramos, UserControlerService, Usuario } from '../../user-controler.service';
import { ObtenerUserService } from 'src/app/servicios/obtener-user.service';



@Component({
  selector: 'app-ramo',
  templateUrl: './ramo.page.html',
  styleUrls: ['./ramo.page.scss'],
})
export class RamoPage implements OnInit {

  usuario!: Usuario
  listaRamos: Ramos[] = [];
  

  constructor(private userS: UserControlerService,private obtenerUserService: ObtenerUserService) { }

  async ngOnInit() {
    this.usuario = this.userS.currentUsuer!;
    this.listaRamos = await this.obtenerUserService.getDatos(this.usuario.id);
  }

 

}
