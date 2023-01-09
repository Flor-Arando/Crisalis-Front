import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/service/company.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companias: Company[] = [];

  constructor(private companyService: CompanyService, private tokenService: TokenService) { }

  isLogged = false
  
  /*async ngOnInit() {
   
    this.companies = await this.companyService.listCompanies();
    console.log(this.companies);

}*/

ngOnInit(): void {
  this.cargarCompany();
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
}

cargarCompany(): void {
  this.companyService.list().subscribe(data => { this.companias = data; })
}

delete(id?: number){
  if(id != undefined){
    this.companyService.delete(id).subscribe(
      data => {
        this.cargarCompany();
      }, err => {
        alert("No se pudo borrar la empresa");
      }
    )
  }
}



}
