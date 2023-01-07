import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  servicios: any = null;

  constructor( private servicioService: ServicioService ) { }

  async ngOnInit() {
   
    this.servicios = await this.servicioService.listServicios();
    console.log(this.servicios);

}



}
