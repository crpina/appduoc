import { Injectable } from '@angular/core';
import { retry, catchError} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Usuario} from '../user-controler.service';
@Injectable({
  providedIn: 'root'
})
export class ObtenerUserService {

  constructor(private http:HttpClient) { }

  apiURL = "https://ge414a617da31c3-ztr7hrus9sn370sw.adb.sa-santiago-1.oraclecloudapps.com/ords/admin/usuario/usuario"

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :'*'
    })
  }
 
  getPosts(name: string, password: string):Observable<any>{

    const url = `${this.apiURL}?name=${name}&password=${password}`;

    return this.http.get(url).pipe();
  }


}
