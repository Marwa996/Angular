// import { ICategory } from './../sharedClasses/test';
import { Component, OnInit } from '@angular/core';
import { IProduct, ICategory } from '../sharedClasses/test';


//class decorator that allow us to tell angular that this is a component
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent{
  categoryList:ICategory[]=[]
  products: IProduct[] = [];
  constructor() { 
    this.categoryList = [
      {
        id:1,
        name:"Laptops",
        description:"this is description"
      },
      {
        id:2,
        name:"Tablets",
        description:"this is description"
      },
      {
        id:3,
        name:"Mobiles",
        description:"this is description"
      },
    ]
    this.products= [
      {
          id: 1,
          name: "Lenvo thinpad X230",
          price: 100,
          quantity: 10,
          imgURL: "https://picsum.photos/200",
          categoryId:1
      },
      {
          id: 2,
          name: "Dell",
          price: 200,
          quantity: 20,
          imgURL: "https://picsum.photos/200",
          categoryId:1
      },
      {
          id: 3,
          name: "Lenovo Tab",
          price: 100,
          quantity: 10,
          imgURL: "https://picsum.photos/200",
          categoryId:2
      },
      {
          id: 4,
          name: "Samsung Tab",
          price: 100,
          quantity: 10,
          imgURL: "https://picsum.photos/200",
          categoryId:2
      },
      {
          id: 5,
          name: "Samsung note 10",
          price: 100,
          quantity: 10,
          imgURL: "https://picsum.photos/200",
          categoryId:3
      },
      {
          id: 6,
          name: "Samsung S10",
          price: 100,
          quantity: 10,
          imgURL: "https://picsum.photos/200",
          categoryId:3
      },
      {
          id: 7,
          name: "tochiba Utlra",
          price: 60000,
          quantity: 14,
          imgURL: "https://picsum.photos/200",
          categoryId:1
      },
      {
          id: 8,
          name: "Apple Utlra",
          price: 7800060,
          quantity: 6,
          imgURL: "https://picsum.photos/200",
          categoryId:1
      },
      {
          id: 9,
          name: "test Utlra",
          price: 7800060,
          quantity: 3,
          imgURL: "https://picsum.photos/200",
          categoryId:2
      },
      {
          id: 10,
          name: "jhgfjxz",
          imgURL: "https://picsum.photos/200",
          quantity: 33,
          price: 44444444, categoryId:3
      },
      {
          name: "fsdjhfgsdjhkgfsh",
          price: 7800060,
          quantity: 3,
          imgURL: "https://picsum.photos/200",
          categoryId:1,
          id: 11
      }
  ]
  }

  getProductsByCatergoy(catId:number){
    this.products= this.products.filter(p=>p.categoryId==catId)
  }

// getall():IProduct[]{
//   return this.products;
// }
// getone(id:number):IProduct|undefined{
//   return this.products.find(i=>i.id===id)
// }
// remove(id:number){
//    this.products= this.products.filter(i=>i.id!=id)
// }
buy(id:number){
  let x = this.products.find(i=>i.id===id)
  console.log(x?.quantity);
  if(x?.quantity){
    x.quantity--;
  }
}
}
