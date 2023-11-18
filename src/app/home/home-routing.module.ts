import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { IngresoUserGuard } from '../ingreso-user.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule), canActivate: [IngresoUserGuard]
  },
  {
    path: 'ramo',
    loadChildren: () => import('./ramo/ramo.module').then( m => m.RamoPageModule), canActivate: [IngresoUserGuard]
  },
  {
    path: 'crear-ramo',
    loadChildren: () => import('./crear-ramo/crear-ramo.module').then( m => m.CrearRamoPageModule), canActivate: [IngresoUserGuard]
  },
  {
    path: 'qrgenerado/:ramoid',
    loadChildren: () => import('./qrgenerado/qrgenerado.module').then( m => m.QrgeneradoPageModule), canActivate: [IngresoUserGuard]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
