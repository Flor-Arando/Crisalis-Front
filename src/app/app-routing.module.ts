import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { CompanyComponent } from './components/company/company.component';
import { EditCompanyComponent } from './components/company/edit-company/edit-company.component';
import { NewCompanyComponent } from './components/company/new-company/new-company.component';
import { CustomersComponent } from './components/customers/customers.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { OrderComponent } from './components/order/order.component';
import { PersonComponent } from './components/person/person.component';
import { NewProductComponent } from './components/product/new-product/new-product.component';
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
  { path: 'order', component: OrderComponent },
  { path: 'add-person', component: AddPersonComponent },
  { path: 'edit-person/:id', component: EditPersonComponent },
  { path: 'edit-company/:id', component: EditCompanyComponent },
  { path: 'new-company', component: NewCompanyComponent },
  { path: 'new-product', component: NewProductComponent },
  { path: 'edit-product/:id', component: NewProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
