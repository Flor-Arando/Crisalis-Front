import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { Tax } from 'src/app/model/tax';
import { ServicioService } from 'src/app/service/servicio.service';
import { TaxService } from 'src/app/service/tax.service';

@Component({
  selector: 'app-new-servicio',
  templateUrl: './new-servicio.component.html',
  styleUrls: ['./new-servicio.component.css']
})
export class NewServicioComponent implements OnInit {
  name: string = '';
  price: number;
  supportPrice: number;
  taxes : Tax[];
  selectedTax : Number[] = []

 

  constructor( 
    private servicioService: ServicioService, 
    private router: Router, 
    private taxService: TaxService
  ) { }
    
    ngOnInit(): void {
      this.loadTaxes();
    }

    loadTaxes() : void {
      this.taxService.list().subscribe(data => {
        this.taxes = data;
      });
    }
  
    save(): void {
      const servicios = new Servicio(this.name, this.price, this.supportPrice, this.selectedTax);
      this.servicioService.save(servicios).subscribe(
        data => {
          alert("Servicio añadido");
          this.router.navigate(['/servicio']);
        }, err => {
          alert(err.error.message);
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
