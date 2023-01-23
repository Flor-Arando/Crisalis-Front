import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from '../model/order';

@Injectable({
    providedIn: 'root'
  })
  
export class OrderService {
    baseURL = 'http://localhost:8080/order/'
    
    
constructor(private httpClient: HttpClient) { }

public list(): Observable<Order[]>{
    return this.httpClient.get<Order[]>(this.baseURL + 'list');
  }

  public detail(id: number): Observable<Order>{
    return this.httpClient.get<Order>(this.baseURL + `detail/${id}`);
  } 

  public save(order: Order): Observable<any>{
    return this.httpClient.post<any>(this.baseURL + 'create', order);
  }
  
  public update(id: number, order: Order): Observable<any>{
    return this.httpClient.put<any>(this.baseURL + `update/${id}`, order);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.baseURL + `delete/${id}`);
  }
            
}