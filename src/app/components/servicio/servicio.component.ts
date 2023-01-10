import { Component, OnInit } from '@angular/core';
import { Servicio } from 'src/app/model/servicio';
import { ServicioService } from 'src/app/service/servicio.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-servicio',
  templateUrl: './servicio.component.html',
  styleUrls: ['./servicio.component.css']
})
export class ServicioComponent implements OnInit {
  servicios:Servicio[] = []

constructor( private servicioService: ServicioService, private tokenService: TokenService ) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarServicio();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarServicio(): void {
    this.servicioService.list().subscribe(data => { this.servicios = data; })
  }

  delete(id?: number){
    if(id != undefined){
      this.servicioService.delete(id).subscribe(
        data => {
          this.cargarServicio();
        }, err => {
          alert("No se pudo borrar el servicio");
        }
      )
    }
  }
  



}
