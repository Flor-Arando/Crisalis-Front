import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';
import { TokenService } from 'src/app/service/token.service';
import { Person } from 'src/app/model/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  //persons : any = null;
  personas: Person[] = [];

  //constructor (private personService: PersonService, private router:Router) { }
  constructor(private personService: PersonService, private tokenService: TokenService) { }

  isLogged = false;

  /*async ngOnInit() {
    this.persons = await this.personService.listPersons();
    console.log(this.persons);
  }*/

  ngOnInit(): void {
    this.cargarPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarPersona(): void {
    this.personService.list().subscribe(data => { this.personas = data; })
  }

  /*addPerson(){ 
      this.router.navigate(['/add-person']);
  }*/

  delete(id?: number){
    if(id != undefined){
      this.personService.delete(id).subscribe(
        data => {
          this.cargarPersona();
        }, err => {
          alert("No se pudo borrar la persona");
        }
      )
    }
  }
  


}
