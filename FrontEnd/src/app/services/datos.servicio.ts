import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { registro } from '../interfaces/registro';
import { sesion } from '../interfaces/sesion';

const URL = 'http://127.0.0.1:4200';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  constructor(private http: HttpClient) { }

  public correoClaveUsuario(usuario: any): Observable<registro[]> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(usuario);
    console.log(body)
    return this.http.post<registro[]>(URL + "/verificacion", body, { 'headers': headers });
  }

  public usuarioActivo(usuario: any): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(usuario);
    return this.http.put(URL + "/activo", body, { 'headers': headers });
  }

  public postUsuario(usuario: any): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(usuario);
    return this.http.post(URL + "/usuario", body, { 'headers': headers });
  }

  public consultarUsuarios(): Observable<registro[]> {
    return this.http.get<registro[]>(URL + "/diablo");
  }

  public consultarActivo(): Observable<registro[]> {
    return this.http.get<registro[]>(URL + "/siActivo");
  }

  public cerrarSesion(usuario: any): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(usuario);
    return this.http.put(URL + "/noActivo", body, { 'headers': headers });
  }
}