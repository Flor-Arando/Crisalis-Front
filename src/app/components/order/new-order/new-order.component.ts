import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Person } from 'src/app/model/person';
import { Product } from 'src/app/model/product';
import { Company } from 'src/app/model/company';
import { Servicio } from 'src/app/model/servicio';
import { Order } from 'src/app/model/order';

import { ProductService } from 'src/app/service/product.service';
import { PersonService } from 'src/app/service/person.service';
import { CompanyService } from 'src/app/service/company.service';
import { TaxService } from 'src/app/service/tax.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-new-order',
  templateUrl: './new-order.component.html',
  styleUrls: ['./new-order.component.css']
})
export class NewOrderComponent implements OnInit {
  persons: Person[] = [];
  selectedPerson: number;
  warranty: number;
  quantity: number;
  products: Product[] = [];
  selectedProduct: number;
  addedProducts: any[] = [];
  companies: Company[];
  selectedCompany: number;
  services: Servicio[];
  selectedService: number;
  addedServices: any[] = [];
  totalProducts: number = 0;
  totalServices: number = 0;
  creationDate: Date;
  lastModification: Date;
  hasActiveServices: boolean = false;
  

  constructor(
    private personService: PersonService,
    private productService: ProductService,
    private companyService: CompanyService,
    private serviceService: ServicioService,
    private router: Router,
    private orderService: OrderService
  ) { }

  ngOnInit(): void {
    this.cargarPersonas();
    this.loadProducts();
    this.loadCompanies();
    this.loadServices();
  }

  cargarPersonas(): void {
    this.personService.list().subscribe(data => {
      this.persons = data;
    });
  }

  loadProducts(): void {
    this.productService.list().subscribe(data => {
      this.products = data;
    });
  }

  loadCompanies(): void {
    this.companyService.list().subscribe(data => {
      this.companies = data;
    });
  }

  loadServices(): void {
    this.serviceService.list().subscribe(data => {
      this.services = data;
    });
  }

  addProduct(): void {
    if (this.addedProducts.find(product => product.id == this.selectedProduct)) {
      return;
    }
    /*console.log(
      this.products.find(product =>  product.id == this.selectedProduct)
    );*/

    let product = this.products.find(product => product.id == this.selectedProduct);

    let taxes = [];
    
    for (let tax of product.taxes) {
      taxes.push({
        "name": tax.name,
        "value": product.unitPrice * (tax.aliquot / 100)
      });
    }
    
    let initialValue = 0;
    const PRODUCT_DISCOUNT_ACTIVE_SERVICE = 10;
    const PRODUCT_WARRANTY_INCREASE = 2;
    const MAXIMUM_PRODUCT_DISCOUNT_VALUE = 2500;
    let warranty = (product.unitPrice * (PRODUCT_WARRANTY_INCREASE / 100) * (this.warranty ?? 0));
    let taxesCalculate = (taxes.reduce((accumulator, currentValue) => accumulator + currentValue.value, initialValue))* this.quantity;
    let discount = (product.unitPrice + taxesCalculate) * (PRODUCT_DISCOUNT_ACTIVE_SERVICE / 100);
    let productPrice = product.unitPrice + taxesCalculate;

    if (this.hasActiveServices) {
  
      productPrice -= Math.min(discount, MAXIMUM_PRODUCT_DISCOUNT_VALUE);
  }

    let addedProduct = {
      "quantity": this.quantity,
      "warranty": this.warranty,
      "id": this.selectedProduct,
      "name": product.name,
      "unitPrice": product.unitPrice,
      "taxes": taxes,
      "total": (productPrice + warranty) * this.quantity,
      "discount": discount
    };
  
    this.addedProducts.push(addedProduct);

    initialValue = 0;
    this.totalProducts = this.addedProducts.reduce((accumulator, currentValue) => accumulator + currentValue.total, initialValue)
  }

  addService(): void {
    if (this.addedServices.find(service => service.id == this.selectedService)) {
      return;
    }

    let service = this.services.find(service => service.id == this.selectedService);

    let taxes = [];

    for (let tax of service.taxes) {
      taxes.push({
        "name": tax.name,
        "value": service.price * (tax.aliquot / 100)
      });
    }

    let initialValue = 0;
    let addedService = {
      "supportPrice": service.supportPrice,
      "id": this.selectedService,
      "name": service.name,
      "price": service.price,
      "taxes": taxes,
      "total": service.price + (taxes.reduce((accumulator, currentValue) => accumulator + currentValue.value, initialValue))
    };

    this.addedServices.push (addedService);

    initialValue = 0;
    this.totalServices = this.addedServices.reduce((accumulator, currentValue) => accumulator + currentValue.total, initialValue)
  }

  save(): void {
    const order = new Order(this.selectedPerson, this.selectedCompany, "", "", this.addedProducts, this.addedServices, this.creationDate, this.lastModification);
    this.orderService.save(order).subscribe(
      data => {
        alert("Pedido añadido");
        this.router.navigate(['/order']);
      }, err => {
        console.log(err);
        alert("ERROR: " + err.error.message);
      }
    )
  }

  out(): void {
    this.router.navigate(['/order'])
  }

  removeProduct(id: number): void {
    this.addedProducts = this.addedProducts.filter(product => product.id != id);
  }

  removeService(id: number): void {
    this.addedServices = this.addedServices.filter(service => service.id != id);
  }

  isActive() {
    this.orderService.activeId(this.selectedPerson).subscribe(data => {
      this.hasActiveServices = data;
    });

  }
}
