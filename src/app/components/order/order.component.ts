import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/model/order';
import { OrderService } from 'src/app/service/order.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];

  constructor (private orderService: OrderService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;

 
  ngOnInit(): void {
    this.cargarOrder();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarOrder(): void {
    this.orderService.list().subscribe(data => { this.orders = data; })
    
  }

  delete(id?: number){
    if(id != undefined){
      this.orderService.delete(id).subscribe(
        data => {
          this.cargarOrder();
        }, err => {
          alert("No se pudo borrar el pedido");
          this.router.navigate(['/order']);
        }
      )
    }
  }

}
