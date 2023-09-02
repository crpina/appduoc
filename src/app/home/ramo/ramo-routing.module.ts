import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RamoPage } from './ramo.page';

const routes: Routes = [
  {
    path: '',
    component: RamoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RamoPageRoutingModule {}
