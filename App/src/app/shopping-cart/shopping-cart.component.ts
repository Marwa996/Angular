import { Component } from '@angular/core';
import { IProduct, ICategory } from '../sharedClasses/test';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {
  categoryList:ICategory[]=[];
  //define variables to be read in the nested component 
  //we'll use two-way-binding with them [(ngModel)]="selectedCategoryId"
  selectedCategoryId:number=0;
  orderTotalPrice:number=0
  constructor(){
    this.categoryList = [
      {
        id:0,
        name:"Select Category",
        description:"this is Select Category description"
      },
      {
        id:1,
        name:"Laptops",
        description:"this is Laptops description"
      },
      {
        id:2,
        name:"Tablets",
        description:"this is Tablets description"
      },
      {
        id:3,
        name:"Mobiles",
        description:"this is Mobiles description"
      },
    ]
  }

  updateOrderTotalPrice(totalPrice:number){
    //total price that comes from the event
    this.orderTotalPrice=totalPrice
  }
}
