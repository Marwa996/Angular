import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {component:HomeComponent,path:'home'},
  {component:AboutComponent,path:'about'},
  {component:ContactUsComponent,path:'contactUs'},
  {component:ShoppingCartComponent,path:'products'},
  {component:ProductDetailsComponent,path:'products/:id'},
  {component:NotFoundComponent,path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
