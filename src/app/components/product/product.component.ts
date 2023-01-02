import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: any = null;

  constructor( private productService: ProductService ) { }

  async ngOnInit() {
   
    this.products = await this.productService.listProducts();
    console.log(this.products);

}

}
