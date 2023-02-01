import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddPersonComponent } from './components/add-person/add-person.component';
import { CompanyComponent } from './components/company/company.component';
import { EditCompanyComponent } from './components/company/edit-company/edit-company.component';
import { NewCompanyComponent } from './components/company/new-company/new-company.component';
import { EditPersonComponent } from './components/edit-person/edit-person.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { EditOrderComponent } from './components/order/edit-order/edit-order.component';
import { NewOrderComponent } from './components/order/new-order/new-order.component';
import { OrderComponent } from './components/order/order.component';
import { PersonComponent } from './components/person/person.component';
import { EditProductComponent } from './components/product/edit-product/edit-product.component';
import { NewProductComponent } from './components/product/new-product/new-product.component';
import { ProductComponent } from './components/product/product.component';
import { EditServiciosComponent } from './components/servicio/edit-servicios/edit-servicios.component';
import { NewServicioComponent } from './components/servicio/new-servicio/new-servicio.component';
import { ServicioComponent } from './components/servicio/servicio.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [
  //{path: '', component: HomeComponent},
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent },
  { path: 'menu', component: MenuComponent },
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
  { path: 'edit-product/:id', component: EditProductComponent },
  { path: 'new-servicio', component: NewServicioComponent },
  { path: 'edit-servicios/:id', component: EditServiciosComponent },
  { path: 'edit-order/:id', component: EditOrderComponent },
  { path: 'new-order', component: NewOrderComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
