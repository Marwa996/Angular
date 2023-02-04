import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {component:HomeComponent,path:'/home'},
  {component:RegisterComponent,path:'/register'},
  {component:LoginComponent,path:'/login'},
  {component:HomeComponent,path:'**'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { 

}
