import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  
export class ProductService {
    baseURL = 'http://localhost:8080'
    
    
constructor(private httpClient: HttpClient) { }

    async listProducts() {
        const products = this.httpClient.get(this.baseURL + "/producto/list");
        return await lastValueFrom(products);
    }
            
}