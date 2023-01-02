import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/service/company.service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {
  companies: any = null;

  constructor(private companyService: CompanyService) { }
  
  async ngOnInit()/*: void*/ {
   
    this.companies = await this.companyService.listCompanies();
    console.log(this.companies);

}

}
