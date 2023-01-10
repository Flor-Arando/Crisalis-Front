import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-edit-servicios',
  templateUrl: './edit-servicios.component.html',
  styleUrls: ['./edit-servicios.component.css']
})
export class EditServiciosComponent implements OnInit {
  servicio: Servicio = null;
  
constructor(private servicioService: ServicioService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.servicioService.detail(id).subscribe(
      data =>{
        this.servicio = data;
      }, err =>{
        alert("Error al modificar el producto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.servicioService.update(id, this.servicio).subscribe(
      data => {
        this.router.navigate(['']);
      }, err =>{
         alert("Error al modificar el servicio");
         this.router.navigate(['']);
      }
    )
  }

}
