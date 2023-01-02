import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class CompanyService {
    baseURL = 'http://localhost:8080'
  //cargarcompanies: any;
    
    constructor(private httpClient: HttpClient) { }

    async listCompanies() {
        const companies = this.httpClient.get(this.baseURL + "/empresa/list");
        return await lastValueFrom(companies);
    }
    
        
    }
     
      


    /*public detail(id: number): Observable<company>{
        return this.httpClient.get<company>(this.baseURL + `detail/${id}`);
      }
    
      public save(company: company): Observable<any>{
        return this.httpClient.post<any>(this.baseURL + 'create', company);
      }
    
      public update(id: number, company: company): Observable<any>{
        return this.httpClient.put<any>(this.baseURL + `update/${id}`, company);
      }
    
      public delete(id: number): Observable<any>{
        return this.httpClient.delete<any>(this.baseURL + `delete/${id}`);
      }*/
  
    