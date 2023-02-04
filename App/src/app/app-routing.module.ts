import { MainLayoutComponent } from './main-layout/main-layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

//paths are working in First-Match wins strategy, this is why we wrote the wild path at the end

const routes: Routes = [
  //children paths that will open only in the layout
  {path:'',component:MainLayoutComponent,children:[
    //default path
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {component:HomeComponent,path:'home'},
  {component:AboutComponent,path:'about'},
  {component:ProductDetailsComponent,path:'products/:pid'},
  {component:ContactUsComponent,path:'contactUs'},
  {component:ShoppingCartComponent,path:'products'},
  {component:ProductDetailsComponent,path:'products/:id'},
  ]},
  //wild path: when user writes path that doesn't exist
  {component:NotFoundComponent,path:'**'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
