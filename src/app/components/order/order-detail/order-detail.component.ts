import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { Person } from 'src/app/model/person';
import { OrderService } from 'src/app/service/order.service';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
  order: any;
  
  
  constructor (
    private orderService: OrderService, 
    private activatedRouter: ActivatedRoute,
    private personService: PersonService
    ) { }

  ngOnInit(): void {
    this.cargarOrder();   
  }

  cargarOrder(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.orderService.detail(id).subscribe(data => {
      this.order = data;
    })
  }

}


