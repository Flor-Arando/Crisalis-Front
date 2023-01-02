import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyComponent } from './components/company/company.component';
import { CustomersComponent } from './components/customers/customers.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { PersonComponent } from './components/person/person.component';
import { ProductComponent } from './components/product/product.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  //{path: '', component: HomeComponent},
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'home', component: HomeComponent },
  { path: 'person', component: PersonComponent },
  { path: 'company', component: CompanyComponent },
  { path: 'product', component: ProductComponent },
  { path: 'servicio', component: ServicioComponent },
  { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
