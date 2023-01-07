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
      const person = this.httpClient.get(this.baseURL + "/persona/list");
      return await lastValueFrom(person);
    }
  
    createPerson(person: object): Observable<object> {
          return this.httpClient.post(`${this.baseURL}`+'create', person);  
        }
        
        deletePerson(id: number): Observable<any> {  
          return this.httpClient.delete(`${this.baseURL}/delete/${id}`, { responseType: 'text' });
        }  
        
        getPerson(id: number): Observable<Object> {  
          return this.httpClient.get(`${this.baseURL}/persona/${id}`);  
        }  
        
        updatePerson(id: number, value: any): Observable<Object> {  
          return this.httpClient.post(`${this.baseURL}/update/${id}`, value);
        }

  }