import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Product } from '../model/product';


@Injectable({
    providedIn: 'root'
  })
  
export class ProductService {
    baseURL = 'http://localhost:8080/producto/'
    
    
constructor(private httpClient: HttpClient) { }

public list(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseURL + 'list');
  }

  public detail(id: number): Observable<Product>{
    return this.httpClient.get<Product>(this.baseURL + `detail/${id}`);
  } 

  public save(product: Product): Observable<any>{
    return this.httpClient.post<any>(this.baseURL + 'create', product);
  }
  
  public update(id: number, product: Product): Observable<any>{
    return this.httpClient.put<any>(this.baseURL + `update/${id}`, product);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.baseURL + `delete/${id}`);
  }
            
}