import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { CompanyService } from 'src/app/service/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  compania: Company = null;

  constructor(private companyService: CompanyService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.companyService.detail(id).subscribe(
      data =>{
        this.compania = data;
      }, err =>{
        alert("Error al modificar la persona");
        this.router.navigate(['/company']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.companyService.update(id, this.compania).subscribe(
      data => {
        this.router.navigate(['/company']);
      }, err =>{
         alert("Error al modificar empresa");
         this.router.navigate(['/company']);
      }
    )
  }

}
