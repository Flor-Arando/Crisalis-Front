import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { Tax } from 'src/app/model/tax';
import { ProductService } from 'src/app/service/product.service';
import { TaxService } from 'src/app/service/tax.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  producto: Product = null;
  taxes : Tax[];
  selectedTax : Number[] = []
  

  constructor(
    private productService: ProductService, 
    private activatedRouter: ActivatedRoute, 
    private router: Router,  
    private taxService: TaxService
    ) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.productService.detail(id).subscribe(
      data =>{
        this.producto = data;
        
        for (let tax of this.producto.taxes) {
          this.selectedTax.push(tax.id);
        }
      }, err =>{
        alert("Error al modificar el producto");
        this.router.navigate(['/product']);
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
    let product = this.producto;
    product.taxes = this.selectedTax;
    this.productService.update(id, product).subscribe(
      data => {
        this.router.navigate(['/product']);
      }, err =>{
         alert(err.error.messsage);
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
