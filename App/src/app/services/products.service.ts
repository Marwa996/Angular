import { IProduct } from './../sharedClasses/test';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  find(arg0: (i: any) => boolean) {
    throw new Error('Method not implemented.');
  }
private products: IProduct[]
  constructor() {
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

   getAllProducts():IProduct[] {
      return this.products
   }

//same function in the products component
   getProductByCategoryID(catID:number): IProduct[]{
    if(catID==0){
        return this.products;
     }
     else
     //filter method takes arrow function
       return this.products.filter(prd=>prd.categoryId==catID)
   }

//this function returns only one object from the list so we used find instead of filter
   getProductByID(prdId:number):IProduct | undefined{
    return this.products.find(prd=>prd.id==prdId)
   }
   
//add new product to the list
   addNewProduct(prd:IProduct){
    this.products.push(prd)
   }
}
