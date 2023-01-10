import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/model/login-user';
import { AuthService } from 'src/app/service/auth.service';
import { TokenService } from 'src/app/service/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isLogged = false;
  isLogginFail = false;
  loginUser!: LoginUser;
  userName!: string;
  password!: string;
  errMsj!: string;


  constructor(private tokenService: TokenService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    console.log("token");
    console.log(this.tokenService.getToken());
    
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      this.isLogginFail = false;
    }

    if (this.isLogged) {
      console.log("esta logeado");
      this.router.navigate(['/home'])
    }
  }

  onLogin(): void{
    console.log("on login");
    this.loginUser = new LoginUser(this.userName, this.password); 
    this.authService.login(this.loginUser).subscribe(data =>{
      console.log(data);
        this.isLogged = true;
        this.isLogginFail = false;
        this.tokenService.setToken(data.token);
        this.router.navigate(['/home'])
      }, err =>{
        this.isLogged = false;
        this.isLogginFail = true;
        this.errMsj = err.error.mensaje;
        console.log(this.errMsj);
        
      });
  }

  register() {
    this.router.navigate(['/user']);
  } //esto redirecciona al formulario para crear el usuario

}
