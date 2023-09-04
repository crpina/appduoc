import { Component, OnInit } from '@angular/core';
import {UserControlerService} from '../../user-controler.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-crear-ramo',
  templateUrl: './crear-ramo.page.html',
  styleUrls: ['./crear-ramo.page.scss'],
})
export class CrearRamoPage implements OnInit {

    constructor(private userS: UserControlerService,public toastController: ToastController) {
    }

    name!: String;


    async advertError(){

      const toast = await this.toastController.create({
  
        message: "Error!",
        duration: 1000,
        position:"top"
  
  
      });
      toast.present()
    }



    ngOnInit() {
      this.name = this.userS.currentUsuer?.name!;
    }

    generarRamo(){
      

      this.advertError();
 

    };


}
