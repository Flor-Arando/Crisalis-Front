import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company } from 'src/app/model/company';
import { Order } from 'src/app/model/order';
import { Product } from 'src/app/model/product';
import { Servicio } from 'src/app/model/servicio';
import { CompanyService } from 'src/app/service/company.service';
import { OrderService } from 'src/app/service/order.service';
import { PersonService } from 'src/app/service/person.service';
import { ServicioService } from 'src/app/service/servicio.service';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {
  order: Order = null;
  orders: Order[] = [];
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
  
  constructor(
    private personService: PersonService,
    private companyService: CompanyService,
    private orderService: OrderService, 
    private tokenService: TokenService, 
    private router: Router, 
    private activatedRouter: ActivatedRoute,
    private servicioService: ServicioService,
     
    ) { }
  
  isLogged = false;

  ngOnInit(): void {
   
  }

}
