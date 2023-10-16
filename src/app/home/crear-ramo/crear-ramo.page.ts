import { Component, OnInit } from '@angular/core';
import {UserControlerService,Usuario} from '../../user-controler.service';
import { ToastController } from '@ionic/angular';
import {ObtenerUserService} from '../../servicios/obtener-user.service';

@Component({
  selector: 'app-crear-ramo',
  templateUrl: './crear-ramo.page.html',
  styleUrls: ['./crear-ramo.page.scss'],
})
export class CrearRamoPage implements OnInit {

  usuario!: Usuario;

  ramo = {

    name: "",
    seccion: ""
  };

  constructor(private userS: UserControlerService,public toastController: ToastController, private obtenerUserServices: ObtenerUserService) {
      
      

  };


  async advertError(){

    const toast = await this.toastController.create({
  
        message: "No se ha podido crear el ramo, por favor ingrese todos los datos",
        duration: 2000,
        position:"top"
  
  
    });
      toast.present()
  }

  async advertGuardado(){

    const toast = await this.toastController.create({
  
        message: "Ramo creado con exito",
        duration: 1000,
        position:"top"
  
  
    });
      toast.present()
  }



  ngOnInit() {
    this.usuario = this.userS.currentUsuer;
  }

    
  generarRamo(id: number, name: string, seccion: string) { 
      

    if(name != "" && seccion != "" && this.usuario.categoria == "Profesor"){


      const data = {
        id: 0,
        name: "",
        seccion: ""
      };

      data.id = id;
      data.name = name;
      data.seccion = seccion;
      
      this.obtenerUserServices.postDatos(data).subscribe(
        
        (response) => {console.log('Respuesta:', response);},
        (error) => { console.error('Error:', error);}
  
      );

      this.advertGuardado();

    }else{
      this.advertError();
    }
    
  };

   
}


    


