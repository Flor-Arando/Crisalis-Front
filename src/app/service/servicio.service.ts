import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  
export class ServicioService {
    baseURL = 'http://localhost:8080'
    
    
constructor(private httpClient: HttpClient) { }

    async listServicios() {
        const servicios = this.httpClient.get(this.baseURL + "/servicio/list");
        return await lastValueFrom(servicios);
    }

    
            
}
     