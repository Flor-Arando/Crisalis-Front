import { Component, OnInit } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { Person } from 'src/app/model/person';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  persons: Person[] = [];
  selectedPerson : number;
  warranty : number;
  quantity : number;
  products: Product[] = [];
  selectedProduct : number;
  addedProducts : any[] = [];

  constructor(private personService: PersonService, private productService: ProductService) { }

  ngOnInit(): void {
    this.cargarPersonas();
    this.loadProducts();
  }

  cargarPersonas() : void {
    this.personService.list().subscribe(data => {
      this.persons = data;
    });
  }

  loadProducts() : void {
    this.productService.list().subscribe(data => {
      this.products = data;
    });
  }

  onUpdate(): void {
  }

  addProduct() : void {
    console.log(234567890);
    this.addedProducts.push({
      "productId" : this.selectedProduct,
      "quantity" : this.quantity,
      "warranty" : this.warranty
    });
  }
}
