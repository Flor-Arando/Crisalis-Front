import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PersonService } from 'src/app/service/person.service';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  persons : any = null;

  constructor(private personService: PersonService) { }
    

  async ngOnInit() {
    this.persons = await this.personService.listPersons();
    console.log(this.persons);
  }


  

}
