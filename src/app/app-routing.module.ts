import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NoIngresoUserGuard } from './no-ingreso-user.guard';
import { IngresoUserGuard } from './ingreso-user.guard';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [IngresoUserGuard]
  },
  {
    path: 'home/:User',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule), canActivate: [IngresoUserGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule), canActivate: [NoIngresoUserGuard]
  },
  {
    path: 'qr',
    loadChildren: () => import('./qr/qr.module').then( m => m.QrPageModule), canActivate: [IngresoUserGuard]
  },
  {
    path: 'rcontrasena',
    loadChildren: () => import('./rcontrasena/rcontrasena.module').then( m => m.RcontrasenaPageModule), canActivate: [NoIngresoUserGuard]
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule), canActivate: [IngresoUserGuard]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
