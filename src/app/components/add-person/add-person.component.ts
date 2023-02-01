import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  dni: string = '';

  constructor( private personService: PersonService, private router: Router ) { }
    
    ngOnInit(): void {
    }
  
    onCreate(): void {
      const personas = new Person(this.firstName, this.lastName, this.dni);
      this.personService.save(personas).subscribe(
        data => {
          alert("Persona añadida");
          this.router.navigate(['']);
        }, err => {
          alert("Falló");
          this.router.navigate(['']);
        }
      )
    }

    out():void{
      this.router.navigate(['/person'])
    }
    
    

}
