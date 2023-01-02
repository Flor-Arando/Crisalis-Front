import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { person } from '../model/person';

@Injectable({
    providedIn: 'root'
  })
  export class PersonService {
    baseURL = 'http://localhost:8080'
    
    constructor(private httpClient: HttpClient) { }
  
    
    async listPersons() {
      const companies = this.httpClient.get(this.baseURL + "/persona/list");
      return await lastValueFrom(companies);
  }
  

    

    public detail(id: number): Observable<person>{
      return this.httpClient.get<person>(this.baseURL + `detail/${id}`);
    }
  
    public savePerson(person: person){
      return this.httpClient.post(this.baseURL + 'persona/create', person);
    }

  
    public update(id: number, person: person): Observable<any>{
      return this.httpClient.put<any>(this.baseURL + `update/${id}`, person);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.baseURL + `delete/${id}`);
    }

  }