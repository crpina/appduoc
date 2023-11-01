import { Component, OnInit } from '@angular/core';
import { ObtenerUserService } from 'src/app/servicios/obtener-user.service';
import { Asistencias, UserControlerService, Usuario } from 'src/app/user-controler.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  constructor(private userS: UserControlerService,private obtenerUserService: ObtenerUserService) { }

  usuario!: Usuario
  listaAsistencias: Asistencias[] = [];

  async ngOnInit() {
    this.usuario = this.userS.currentUsuer!;
    this.listaAsistencias = await this.obtenerUserService.getAsistencias(this.usuario.id);
  }

}
