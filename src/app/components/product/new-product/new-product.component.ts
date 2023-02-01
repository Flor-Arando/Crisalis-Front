import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Tax } from 'src/app/model/tax';
import { ProductService } from 'src/app/service/product.service';
import { TaxService } from 'src/app/service/tax.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  name: string = '';
  unitPrice: number;
  taxes : Tax[];
  selectedTax : Number[] = []
  

  constructor( 
    private productService: ProductService, 
    private router: Router,
    private taxService: TaxService
    ) { }
    
    ngOnInit(): void {
      this.loadTaxes();
    }

    loadTaxes() : void {
      this.taxService.list().subscribe(data => {
        this.taxes = data;
        //this.selectedTax = new Array(this.taxes.length).fill(false);
      });
    }
  
    save(): void {
      const producto = new Product(this.name, this.unitPrice, this.selectedTax);
      this.productService.save(producto).subscribe(
        data => {
          alert("Producto añadido");
          this.router.navigate(['/product']);
        }, err => {
          alert(err.error.message);
          //this.router.navigate(['/product']);
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
      this.router.navigate(['/product'])
    }

}
