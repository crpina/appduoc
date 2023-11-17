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
    seccion: "",
    clases: 0
  };

  constructor(private userS: UserControlerService,public toastController: ToastController, private obtenerUserServices: ObtenerUserService) {
      
      

  };


  //toats error
  async advertError(){

    const toast = await this.toastController.create({
  
        message: "No se ha podido crear el ramo, por favor ingrese todos los datos",
        duration: 2000,
        position:"top"
  
  
    });
      toast.present()
  }

  //toats guardado
  async advertGuardado(){

    const toast = await this.toastController.create({
  
        message: "Ramo creado con exito",
        duration: 1000,
        position:"top"
  
  
    });
      toast.present()
  }


 //se ejecuta al iniciar la pagina
  ngOnInit() {
    this.usuario = this.userS.currentUsuer;
  }

    
  //metodo para generar ramos y gardarlos en la base de datos
  generarRamo(id: number, name: string, seccion: string, clases: number) { 
      

    if(name != "" && seccion != "" && clases > 0 && this.usuario.categoria == "Profesor" && name.length >= 1 && seccion.length > 1){


      const data = {
        id: 0,
        name: "",
        seccion: "",
        clases: 0
      };

      data.id = id;
      data.name = name;
      data.seccion = seccion;
      data.clases = clases;
      
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


    


