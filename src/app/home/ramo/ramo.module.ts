import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RamoPageRoutingModule } from './ramo-routing.module';

import { RamoPage } from './ramo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RamoPageRoutingModule
  ],
  declarations: [RamoPage]
})
export class RamoPageModule {}
