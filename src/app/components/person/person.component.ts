import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';
import { Person } from 'src/app/model/person';
import { Router } from '@angular/router';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  personas: Person[] = [];

  constructor(private personService: PersonService, private tokenService: TokenService, private router: Router) { }

  isLogged = false;

 
  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.personService.list().subscribe(data => { this.personas = data; });
  }

  delete(id?: number){
    if(id != undefined){
      this.personService.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("No se pudo borrar la persona");
          this.router.navigate(['/person']);
        }
      )
    }
  }
  


}
