import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { Order } from 'src/app/model/order';
import { Router } from '@angular/router';
import { OrderService } from 'src/app/service/order.service';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {
  orders: Order[] = []
  isLogged = false;

  constructor(private orderService: OrderService, private tokenService: TokenService, private router: Router
    ,private httpClient: HttpClient) { }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    this.loadOrders();
  }

  loadOrders(): void {
    this.orderService.list().subscribe(data => {
      // Se sacan los pedidos que no tengan servicios
      this.orders = data.filter(order => order.services.length > 0);
    });
  }

  // TODO: arreglar
  changeState(orderServiceId : number) : void {
    this.httpClient.patch<any>(`http://localhost:8080/order-service-state/change-active/${orderServiceId}`, {})
    .subscribe(
      data => {
      },
      err => {
        alert(err.error.message);
      }
    );
  }
}
