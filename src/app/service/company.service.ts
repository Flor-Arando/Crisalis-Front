import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom, Observable } from 'rxjs';
import { Company } from '../model/company';


@Injectable({
    providedIn: 'root'
  })
  export class CompanyService {
    baseURL = 'http://localhost:8080/empresa/'
  //cargarcompanies: any;
    
    constructor(private httpClient: HttpClient) { }

    /*async listCompanies() {
        const companies = this.httpClient.get(this.baseURL + "/empresa/list");
        return await lastValueFrom(companies);
    }*/

    public list(): Observable<Company[]>{
      return this.httpClient.get<Company[]>(this.baseURL + 'list');
    }

    public detail(id: number): Observable<Company>{
      return this.httpClient.get<Company>(this.baseURL + `detail/${id}`);
    } 

    public save(company: Company): Observable<any>{
      return this.httpClient.post<any>(this.baseURL + 'create', company);
    }
    
    public update(id: number, company: Company): Observable<any>{
      return this.httpClient.put<any>(this.baseURL + `update/${id}`, company);
    }
  
    public delete(id: number): Observable<any>{
      return this.httpClient.delete<any>(this.baseURL + `delete/${id}`);
    }
    
        
  }
    