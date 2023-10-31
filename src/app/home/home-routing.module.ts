import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'ramo',
    loadChildren: () => import('./ramo/ramo.module').then( m => m.RamoPageModule)
  },
  {
    path: 'crear-ramo',
    loadChildren: () => import('./crear-ramo/crear-ramo.module').then( m => m.CrearRamoPageModule)
  },
  {
    path: 'qrgenerado/:ramoid',
    loadChildren: () => import('./qrgenerado/qrgenerado.module').then( m => m.QrgeneradoPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
