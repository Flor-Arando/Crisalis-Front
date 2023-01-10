import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Servicio } from 'src/app/model/servicio';
import { ServicioService } from 'src/app/service/servicio.service';

@Component({
  selector: 'app-new-servicio',
  templateUrl: './new-servicio.component.html',
  styleUrls: ['./new-servicio.component.css']
})
export class NewServicioComponent implements OnInit {
  name: string = '';
  unitPrice: number;
  support: boolean;

  constructor( private servicioService: ServicioService, private router: Router ) { }
    
    ngOnInit(): void {
    }
  
    onCreate(): void {
      const servicios = new Servicio(this.name, this.unitPrice, this.support);
      this.servicioService.save(servicios).subscribe(
        data => {
          alert("Servicio añadido");
          this.router.navigate(['']);
        }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
    }
    
    


}
