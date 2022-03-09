import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutosApiService {

  readonly autosAPIUrl = "https://localhost:7291/api"

  constructor(private http:HttpClient) { }
  //AUTOS
  //Traer lista de Autos
  getAutosList():Observable<any[]> {
    return this.http.get<any>(this.autosAPIUrl + '/Autos');
  }
  //Agregar Auto
  addAuto(data:any) {
    return this.http.post(this.autosAPIUrl + '/Autos', data);
  }
  //Modificar Auto
  putAuto(id:number|string, data:any) {
    return this.http.put(this.autosAPIUrl + `/Autos/${id}`, data);
  }
  //Eliminar Auto
  deleteAuto(id:number|string) {
    return this.http.delete(this.autosAPIUrl + `/Autos/${id}`);
  }

  //TIPOS DE AUTO
  //Traer lista de Tipos
  getTiposList():Observable<any[]> {
    return this.http.get<any>(this.autosAPIUrl + '/TipoAutos');
  }
  //Agregar Tipo
  addTipo(data:any) {
    return this.http.post(this.autosAPIUrl + '/TipoAutos', data);
  }
  //Modificar Tipo
  putTipo(id:number|string, data:any) {
    return this.http.put(this.autosAPIUrl + `/TipoAutos/${id}`, data);
  }
  //Eliminar Tipo
  deleteTipo(id:number|string) {
    return this.http.delete(this.autosAPIUrl + `/TipoAutos/${id}`);
  }
}
