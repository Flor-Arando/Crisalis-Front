import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { person } from 'src/app/model/person';
import { PersonService } from 'src/app/service/person.service';

@Component({
  selector: 'app-add-person',
  templateUrl: './add-person.component.html',
  styleUrls: ['./add-person.component.css']
})
export class AddPersonComponent implements OnInit {

  constructor( private personService: PersonService) { }

  person: person = new person();
  submitted = false;

  ngOnInit(): void {
    this.submitted=false;
  }

  personsaveform=new FormGroup({
      firstName:new FormControl('' , [Validators.required , Validators.minLength(50) ] ),  
      lastName:new FormControl('',[Validators.required,Validators.minLength(50)]), //de donde sacas el .email? 
      dni:new FormControl('',[Validators.required,Validators.minLength(8)]),
      //por ej esEmpresa:new FormControl() con esto elegimos si es o no ver en el ejemplo
    });
  
  savePerson(){
    this.person= new person();
    this.person.firstName = this.PersonFirstName.value;
    this.person.lastName = this.PersonLastName.value;
    this.person.dni = this.PersonDni.value;
    this.submitted = true;
    this.save(); 
  
    
  }

  save() {
        this.personService.createPerson(this.person)  
          .subscribe(data => console.log(data), error => console.log(error));  
        this.person = new person();  
      }

     get PersonFirstName(){  
          return this.personsaveform.get('firstName');  
        }
    
    get PersonLastName(){  
         return this.personsaveform.get('lastName');  
       }

     get PersonDni(){  
          return this.personsaveform.get('dni');  
        }
    
    addPersonForm(){  
      this.submitted=false;  
      this.personsaveform.reset();  
    }    
    
    

}
