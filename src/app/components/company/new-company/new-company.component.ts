import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-new-company',
  templateUrl: './new-company.component.html',
  styleUrls: ['./new-company.component.css']
})
export class NewCompanyComponent implements OnInit {
  companyName: string;
  activityStart: Date;
  cuit: number;

  constructor( private companyService: CompanyService, private router: Router ) { }
    
    ngOnInit(): void {
    }
  
    onCreate(): void {
      const companies = new Company(this.companyName, this.cuit, this.activityStart);
      this.companyService.save(companies).subscribe(
        data => {
          alert("Empresa añadida");
          this.router.navigate(['/company']);
        }, err => {
          alert("Falló");
          this.router.navigate(['/company']);
        }
      )
    }

}
