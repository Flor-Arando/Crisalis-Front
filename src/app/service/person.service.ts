import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Person } from '../model/person';


@Injectable({
    providedIn: 'root'
  })
  export class PersonService {
    baseURL = 'http://localhost:8080/persona/'
    
    constructor(private httpClient: HttpClient) { }
  
    
    /*async listPersons() {
      const person = this.httpClient.get(this.baseURL + "/list");
      return await lastValueFrom(person);
    }*/

    public list(): Observable<Person[]>{
      return this.httpClient.get<Person[]>(this.baseURL + 'list');
    }

    public detail(id: number): Observable<Person>{
      return this.httpClient.get<Person>(this.baseURL + `detail/${id}`);
    } 

    public save(person: Person): Observable<any>{
      return this.httpClient.post<any>(this.baseURL + 'create', person);
    }
    
    public update(id: number, person: Person): Observable<any>{
      return this.httpClient.put<any>(this.baseURL + `update/${id}`, person);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.baseURL + `delete/${id}`);
    }
  }