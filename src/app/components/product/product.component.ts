import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  productos: Product[] = [];

  constructor(private productService: ProductService, private tokenService: TokenService) { }

  isLogged = false;

ngOnInit(): void {
  this.cargarProducto();
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
}

cargarProducto(): void {
  this.productService.list().subscribe(data => { this.productos = data; })
}

/*addPerson(){ 
    this.router.navigate(['/add-person']);
}*/

delete(id?: number){
  if(id != undefined){
    this.productService.delete(id).subscribe(
      data => {
        this.cargarProducto();
      }, err => {
        alert("No se pudo borrar el producto");
      }
    )
  }
}


}
