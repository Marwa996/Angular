import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AboutComponent } from './about/about.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DefaultComponent } from './default/default.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { LightBoxDirective } from './Directives/light-box.directive';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { StyleDirective } from './Directives/style.directive';
import { FilterPipe } from './Pipes/default.pipe';
import { SouqComponent } from './souq/souq.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    AboutComponent,
    ContactUsComponent,
    DefaultComponent,
    NotFoundComponent,
    ShoppingCartComponent,
    LightBoxDirective,
    HomeComponent,
    ProductDetailsComponent,
    NavbarComponent,
    MainLayoutComponent,
    StyleDirective,
    FilterPipe,
    SouqComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
