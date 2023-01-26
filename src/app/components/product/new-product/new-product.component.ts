import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  name: string = '';
  unitPrice: number;
  warranty: boolean;

  constructor( private productService: ProductService, private router: Router ) { }
    
    ngOnInit(): void {
    }
  
    onCreate(): void {
      const productos = new Product(this.name, this.unitPrice);
      this.productService.save(productos).subscribe(
        data => {
          alert("Producto añadido");
          this.router.navigate(['/product']);
        }, err => {
          alert(err.error.message);
          //this.router.navigate(['/product']);
        }
      )
    }

}
