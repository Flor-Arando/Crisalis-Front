import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUser } from 'src/app/model/new-user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  newUser! : NewUser;
  fullName!:string;
  userName!:string;
  email!:string;
  password!:string;
  errMsj!: string;


  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
      this.isLogginFail = false;
      
    }
  }

  onLogin(): void{
    this.newUser = new NewUser(this.fullName, this.userName, this.email, this.password); 
    this.authService.nuevo(this.newUser).subscribe(data =>{
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.router.navigate([''])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        
      })
  }

  login() {
    this.router.navigate(['/login'])
  }

}
