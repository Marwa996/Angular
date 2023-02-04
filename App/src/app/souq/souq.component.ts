import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../services/products.service';
import { IProduct } from '../sharedClasses/test';

@Component({
  selector: 'app-souq',
  templateUrl: './souq.component.html',
  styleUrls: ['./souq.component.css']
})
export class SouqComponent implements OnInit{
  productsListOfCategory: IProduct[]=[];
constructor(private productsService:ProductsService){
  this.productsListOfCategory=productsService.getAllProducts();
}
ngOnInit(){
  console.log(this.productsListOfCategory)
}
}
