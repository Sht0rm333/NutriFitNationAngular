import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
  public JsonURL='http://localhost:3000/usuario';
  constructor(private http:HttpClient) {}

  public getJSON():Observable<any>{
     return this.http.get(this.JsonURL);
  }

  public postUsuario(usuario:any): Observable<any> {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(usuario);
    console.log(body)
    return this.http.post(this.JsonURL, body,{'headers':headers});
  }
}