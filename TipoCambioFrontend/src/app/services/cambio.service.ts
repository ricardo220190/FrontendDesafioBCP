import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cambio } from '../models/cambio';
import { TipoCambio } from '../models/tipo-cambio';

@Injectable({
  providedIn: 'root'
})
export class CambioService {

  private cabeceras: HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  private baseEndpoint = 'https://localhost:5001/api/cambio';
  constructor(private http: HttpClient) { }

  public listar(): Observable<Cambio[]> {
    return this.http.get<Cambio[]>(this.baseEndpoint);
  }
  public ver(fecha:string, tipo:string, origen:string,destino:string): Observable<Cambio>{
    return this.http.get<Cambio>(`${this.baseEndpoint}/BuscarTipoCambio/Fecha/${fecha}/TipoTransa/${tipo}/Origen/${origen}/Destino/${destino}`);
  }
  public crear(cambio: Cambio): Observable<Cambio>{
    return this.http.post<Cambio>(this.baseEndpoint,cambio,{headers: this.cabeceras});
  }
  //Solo esta funcion consume del backend
  public calcular(cambio: TipoCambio): Observable<TipoCambio>{
    return this.http.post<TipoCambio>(`${this.baseEndpoint}/CalcularTipoCambio`,cambio,{headers: this.cabeceras});
  }


}
