import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { UserComponent } from './components/user/user.component';
import { interceptorProvider } from './service/interceptor-service';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { FooterComponent } from './components/footer/footer.component';
import { CustomersComponent } from './components/customers/customers.component';
import { PersonComponent } from './components/person/person.component';
import { CompanyComponent } from './components/company/company.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { ProductComponent } from './components/product/product.component';
import { OrderComponent } from './components/order/order.component';
import { ProductServiceTsComponent } from './service/producttt.service.ts/producttt.service.ts.component';

/*const appRoutes:Routes=[
  {path:'login', component:LoginComponent},
  {path:'user', component:UserComponent}
   //''adentro va url del navegador

];*/

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent, //declaramos los componentes para el routing
    UserComponent, HomeComponent, MenuComponent, FooterComponent, CustomersComponent, PersonComponent, CompanyComponent, ServicioComponent, ProductComponent, OrderComponent, ProductServiceTsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,//.forRoot({}), creamos una constante dentro un array de rutas, declaramos, e importamos routermodule y con forRoot le decimos donde estan las rutas
    HttpClientModule,
    FormsModule
  
  ],
  providers: [

    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
