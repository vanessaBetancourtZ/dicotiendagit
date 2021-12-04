
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Disco } from '../models/disco';

@Injectable({
  providedIn: 'root'
})
export class DiscoService {
  url='http://localhost:3000/api/productos/';

  constructor(private http: HttpClient) {}

  getdiscos(): Observable <any>{
    return this.http.get(this.url);

  }

  eliminarDiscos(id:String): Observable <any>{
    return this.http.delete(this.url + id);
  }


  guardarDiscos(disco: Disco):Observable <any>{
    return this.http.post(this.url, disco);
  }

  obtenerDisco(id:String): Observable <any>{
    return this.http.get(this.url + id);
}
}