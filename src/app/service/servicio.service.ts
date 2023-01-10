import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Servicio } from '../model/servicio';


@Injectable({
    providedIn: 'root'
  })
  
export class ServicioService {
    baseURL = 'http://localhost:8080/servicio/'
    
    
constructor(private httpClient: HttpClient) { }

public list(): Observable<Servicio[]>{
    return this.httpClient.get<Servicio[]>(this.baseURL + 'list');
  }

  public detail(id: number): Observable<Servicio>{
    return this.httpClient.get<Servicio>(this.baseURL + `detail/${id}`);
  } 

  public save(servicio: Servicio): Observable<any>{
    return this.httpClient.post<any>(this.baseURL + 'create', servicio);
  }
  
  public update(id: number, servicio: Servicio): Observable<any>{
    return this.httpClient.put<any>(this.baseURL + `update/${id}`, servicio);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.baseURL + `delete/${id}`);
  }            
}
     