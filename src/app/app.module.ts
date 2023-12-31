import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { UserControlerService } from './user-controler.service';
import {QRCodeModule} from "angularx-qrcode";
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [AppComponent],

  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    QRCodeModule,
    HttpClientModule,
  ],

  providers:
  [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    UserControlerService
  ],

  bootstrap:

  [AppComponent],
})
export class AppModule {}
