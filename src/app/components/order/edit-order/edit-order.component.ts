import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Order } from 'src/app/model/order';
import { Person } from 'src/app/model/person';
import { Product } from 'src/app/model/product';
import { Servicio } from 'src/app/model/servicio';
import { CompanyService } from 'src/app/service/company.service';
import { OrderService } from 'src/app/service/order.service';
import { PersonService } from 'src/app/service/person.service';
import { ProductService } from 'src/app/service/product.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
/*    orders: Order = null;
    persons: Person[] = [];
    selectedPerson : number;
    warranty : number;
    quantity : number;
    products: Product[] = [];
    selectedProduct : number;
    addedProducts : any[] = [];
    companies : Company[];
    selectedCompany : number;
    services : Servicio[];
    selectedService : number;
    addedServices : any[] = [];
    total : number = 0;
  */  
  constructor(
    private personService: PersonService,
    private productService: ProductService,
    private companyService: CompanyService,
    private serviceService: ServicioService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
    private orderService: OrderService
  ) { }
  
  ngOnInit(): void {
    /*this.cargarPersonas();
    this.loadProducts();
    this.loadCompanies();
    this.loadServices();*/
  }
/*
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

    let product = this.products.find(product => product.id == this.selectedProduct);

    let taxes = [];
    console.log(product.taxes);
    for (let tax of product.taxes) {
      taxes.push({
        "name": tax.name,
        "value": product.unitPrice * (tax.aliquot / 100)
      });
    }
   
    let initialValue = 0;
    let addedProduct = {
      "quantity": this.quantity,
      "warranty": this.warranty,
      "id": this.selectedProduct,
      "name": product.name,
      "unitPrice": product.unitPrice,
      "taxes": taxes,
      "total":
        ((product.unitPrice * 0.02 * (this.warranty ?? 0)) + product.unitPrice) * this.quantity
        + (taxes.reduce((accumulator, currentValue) => accumulator + currentValue.value, initialValue)) * this.quantity
    };
    
    this.addedProducts.push(addedProduct
   
    );

    initialValue = 0;
    this.total = this.addedProducts.reduce((accumulator, currentValue) => accumulator + currentValue.total, initialValue)
  }

  addService(): void {
    this.addedServices.push({
      "id": this.selectedService,
      "name": this.services.find(service => service.id == this.selectedService).name
    });
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    let order = this.orders;
    this.orderService.update(id, order).subscribe(
      data => {
        alert("Pedido actualizado");
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
  }*/
}
