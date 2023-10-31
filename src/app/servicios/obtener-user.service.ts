import { Injectable } from '@angular/core';
import { retry, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ObtenerUserService {

  constructor(private http:HttpClient) { }

  apiURL = "https://ge414a617da31c3-ztr7hrus9sn370sw.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/usuario/usuario"
  
  apiPostRamo ="https://ge414a617da31c3-ztr7hrus9sn370sw.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/ramos/ramosgenerar"

  apiGetRamo ='https://ge414a617da31c3-ztr7hrus9sn370sw.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/ramos/ramosver'

  apiPostAsistencia = 'https://ge414a617da31c3-ztr7hrus9sn370sw.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/asistenciaramo/asistenciaramo'

  apiGetAsistencia = ''

  //metodo para obtener datos de usuario en la base de datos
  getPosts(name: string, password: string):Observable<any>{

    const url = `${this.apiURL}?name=${name}&password=${password}`;

    return this.http.get(url).pipe();
  }


  //metodo para guardar ramos en la base de datos
  postDatos(data: any): Observable<any> {
    
   
    const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          }),
        };

    return this.http.post(`${this.apiPostRamo}`, data, httpOptions);
  
  }


    //metodo para guardar asistencias en la base de datos
    async postAsistencia(data: any): Promise<any> {
    
   
      const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }),
          };
  
      const respuesta = await this.http.post(`${this.apiPostAsistencia}`, data, httpOptions).toPromise();
    
      return respuesta;
    }


  //metodo para obtener ramos de la base de datos

  async getAsistencia(id: number){

    const url = `${this.apiGetRamo}?id=${id}`;

    const respuesta = await this.http.get(url).toPromise();
    
    if(respuesta === undefined){

      return [];
    }
    
    const Json = respuesta as Record<string,any>
    console.log(Json);  

    const asistencias = Object.values(Json['items']).map((asistencia: any) => {
      return {
        id: asistencia['id_ramo'],
        dueno: asistencia['creador'],
        nombre: asistencia['nombre_ramo'],
      }
    })
    console.log(asistencias);
    
    return asistencias;

  };
  
  //Metodo para mostrar asistencias

  async getDatos(id: number){

    const url = `${this.apiGetRamo}?id=${id}`;

    const respuesta = await this.http.get(url).toPromise();
    
    if(respuesta === undefined){

      return [];
    }
    
    const Json = respuesta as Record<string,any>
    console.log(Json);  

    const ramos = Object.values(Json['items']).map((ramo: any) => {
      return {
        id: ramo['id_ramo'],
        dueno: ramo['creador'],
        nombre: ramo['nombre_ramo'],
        seccion: ramo['seccion'],
        fecha: ramo['fecha_creacion']
      }
    })
    console.log(ramos);
    
    return ramos;

  };


  
}        

  
  


