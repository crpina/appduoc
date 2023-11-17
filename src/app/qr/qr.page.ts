import {Component, OnDestroy} from '@angular/core';
import { BarcodeScanner } from "@capacitor-community/barcode-scanner";
import { UserControlerService, Usuario } from '../user-controler.service';
import { ObtenerUserService } from '../servicios/obtener-user.service';
import { AlertController, AlertOptions, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnDestroy{


  scannedResult = 0;
  content_visibility = '';


  usuario!: number;
  ramo!: number;



  constructor( private usu: UserControlerService, private obtenerUserService: ObtenerUserService,public toastController: ToastController,private alertController: AlertController) { }


  // ionViewDidEnter otra opcion
  ngOnInit(){
    this.usuario = this.usu.currentUsuer.id;
    console.log(this.usuario);
  }



  async checkPermission() {
    try {
      const status = await BarcodeScanner.checkPermission({ force: true });
      if (status.granted) {
        return true;
      }
      return false;
    } catch(e) {
      console.log(e);
    } return false;
  }

  async startScan() {
    try {
      const permission = await this.checkPermission();
      if(!permission) {
        return;
      }
      await BarcodeScanner.hideBackground();
      document.querySelector('body')?.classList.add('scanner-active');
      this.content_visibility = 'hidden';
      const result = await BarcodeScanner.startScan();
      console.log(result);
      BarcodeScanner.showBackground();
      document.querySelector('body')?.classList.remove('scanner-active');
      this.content_visibility = '';
      if(result?.hasContent) {
        this.scannedResult = parseInt(result.content);
        console.log(this.scannedResult);
      }
    } catch(e) {
      console.log(e);
      this.stopScan();
    }
  }

  stopScan() {
    BarcodeScanner.showBackground();
    BarcodeScanner.stopScan();
    document.querySelector('body')?.classList.remove('scanner-active');
    this.content_visibility = '';
  }
//
  ngOnDestroy(): void {
    this.stopScan();
  }
//

  async advertGuardadoError(){

    const toast = await this.toastController.create({
  
        message: "asistencia  no creado con exito",
        duration: 1000,
        position:"top"
  
  
    });
      toast.present()
  }
  

  async presentAlert( options: AlertOptions ) {
    const alert = await this.alertController.create( options )
    await alert.present()
  }



  async GuardarAsistencia(ramoid: number,  usuarioid: number){


      const data = {
          ramoid: 0,
          usuarioid: 0
        
      };
      
      
      data.ramoid = ramoid;
      data.usuarioid = usuarioid;


      if(data.ramoid != 0 && data.usuarioid != 0 && data.ramoid != null && data.usuarioid != null){

        const responst =  await this.obtenerUserService.postAsistencia(data);

        await this.presentAlert({
  
          header: 'Exito',
          message: ' asistencia creada con exito' + responst ,
          buttons: ['OK']  
        })

      }else{
        this.advertGuardadoError();
      }  



  };

 



}
