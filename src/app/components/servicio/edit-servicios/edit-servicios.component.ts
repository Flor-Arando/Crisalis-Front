import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { Tax } from 'src/app/model/tax';
import { ServicioService } from 'src/app/service/servicio.service';
import { TaxService } from 'src/app/service/tax.service';

@Component({
  selector: 'app-edit-servicios',
  templateUrl: './edit-servicios.component.html',
  styleUrls: ['./edit-servicios.component.css']
})
export class EditServiciosComponent implements OnInit {
  servicio: Servicio = null;
  taxes : Tax[];
  selectedTax : Number[] = []
  
constructor(
  private servicioService: ServicioService, 
  private activatedRouter: ActivatedRoute, 
  private router: Router,
  private taxService: TaxService
  ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servicioService.detail(id).subscribe(
      data =>{
        this.servicio = data;

        for (let tax of this.servicio.taxes) {
          this.selectedTax.push(tax.id);
        }
      }, err =>{
        alert("Error al modificar el servicio");
        this.router.navigate(['/servicio']);
      }
    )

    this.loadTaxes();
  }

  loadTaxes() : void {
    this.taxService.list().subscribe(data => {
      this.taxes = data;
    });
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    let service = this.servicio;
    service.taxes = this.selectedTax;
    this.servicioService.update(id, service).subscribe(
      data => {
        this.router.navigate(['/servicio']);
      }, err =>{
         alert(err.error.messsage);
         //this.router.navigate(['/servicio']);
      }
    )
  }

  manageTax (id : number): void {
    if (this.selectedTax.includes(id)) {
      this.selectedTax = this.selectedTax.filter(existingId => existingId != id );
    } else {
      this.selectedTax.push(id);
    }

  }

  out():void{
    this.router.navigate(['/servicio'])
  }

}
