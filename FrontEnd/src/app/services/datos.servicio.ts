import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const URL = 'http://127.0.0.1:4200';

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
    return this.http.post(URL + "/usuario", body,{'headers':headers});
  }

  public consultarUsuarios(){
    return this.http.get(URL)
  }
}