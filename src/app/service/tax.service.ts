import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tax } from '../model/tax';

@Injectable({
  providedIn: 'root'
})
export class TaxService {

  baseURL = 'http://localhost:8080/tax'
    
  constructor(private httpClient: HttpClient) { }

  public list(): Observable<Tax[]> {
    return this.httpClient.get<Tax[]>(this.baseURL + '/list');
  }
}
