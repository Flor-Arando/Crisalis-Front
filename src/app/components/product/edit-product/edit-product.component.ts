import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  producto: Product = null;

  constructor(private productService: ProductService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.productService.detail(id).subscribe(
      data =>{
        this.producto = data;
      }, err =>{
        alert("Error al modificar el producto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.productService.update(id, this.producto).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar el producto");
         this.router.navigate(['']);
      }
    )
  }
}
