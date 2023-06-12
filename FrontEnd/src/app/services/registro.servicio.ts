import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  public JsonURL='http://localhost:3000/usuario';
  constructor(private http:HttpClient) {
      
   }
  public getJSON():Observable<any>{
     return this.http.get(this.JsonURL);
  }
}