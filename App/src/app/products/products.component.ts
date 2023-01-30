import { ProductsService } from './../services/products.service';
import { EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
// import { ICategory } from './../sharedClasses/test';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct, ICategory } from '../sharedClasses/test';


//class decorator that allow us to tell angular that this is a component
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnChanges{
  
  // products: IProduct[] = [];

  //the viewed list after selecting category
  productsListOfCategory: IProduct[]=[];
  
  //received from parent Shopping cart
  @Input() selectedCategoryId:number=0
  
  //declaring variable to be sent to the parent 
  totalPrice:number=0;
  
  //creating event to change the output
  //event emitter is is used to add a callback function that's going to be executed when the event is triggered
  //output decorator so that the parent(cart) can see the event
  @Output() onTotalPriceChange: EventEmitter<number>;
 
  //to inject the service, we call it in the constructor
  constructor(private productsService:ProductsService) { 
    
    this.onTotalPriceChange=new EventEmitter<number>()
  
  //////////products initialized in products.service
  
  //   this.products= [
  //     {
  //         id: 1,
  //         name: "Lenvo thinpad X230",
  //         price: 100,
  //         quantity: 10,
  //         imgURL: "https://picsum.photos/200",
  //         categoryId:1
  //     },
  //     {
  //         id: 2,
  //         name: "Dell",
  //         price: 200,
  //         quantity: 20,
  //         imgURL: "https://picsum.photos/200",
  //         categoryId:1
  //     },
  //     {
  //         id: 3,
  //         name: "Lenovo Tab",
  //         price: 100,
  //         quantity: 10,
  //         imgURL: "https://picsum.photos/200",
  //         categoryId:2
  //     },
  //     {
  //         id: 4,
  //         name: "Samsung Tab",
  //         price: 100,
  //         quantity: 10,
  //         imgURL: "https://picsum.photos/200",
  //         categoryId:2
  //     },
  //     {
  //         id: 5,
  //         name: "Samsung note 10",
  //         price: 100,
  //         quantity: 10,
  //         imgURL: "https://picsum.photos/200",
  //         categoryId:3
  //     },
  //     {
  //         id: 6,
  //         name: "Samsung S10",
  //         price: 100,
  //         quantity: 10,
  //         imgURL: "https://picsum.photos/200",
  //         categoryId:3
  //     },
  //     {
  //         id: 7,
  //         name: "tochiba Utlra",
  //         price: 60000,
  //         quantity: 14,
  //         imgURL: "https://picsum.photos/200",
  //         categoryId:1
  //     },
  //     {
  //         id: 8,
  //         name: "Apple Utlra",
  //         price: 7800060,
  //         quantity: 6,
  //         imgURL: "https://picsum.photos/200",
  //         categoryId:1
  //     },
  //     {
  //         id: 9,
  //         name: "test Utlra",
  //         price: 7800060,
  //         quantity: 3,
  //         imgURL: "https://picsum.photos/200",
  //         categoryId:2
  //     },
  //     {
  //         id: 10,
  //         name: "jhgfjxz",
  //         imgURL: "https://picsum.photos/200",
  //         quantity: 33,
  //         price: 44444444, categoryId:3
  //     },
  //     {
  //         name: "fsdjhfgsdjhkgfsh",
  //         price: 7800060,
  //         quantity: 3,
  //         imgURL: "https://picsum.photos/200",
  //         categoryId:1,
  //         id: 11
  //     }
  // ]
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.selectedCategoryId)
    this.productsListOfCategory=this.productsService.getProductByCategoryID(this.selectedCategoryId)
  
    //this logic was implemented in the products service

        //   if(this.selectedCategoryId==0){
      //     this.productsListOfCategory=this.products;
      //   }
      //   else
      //   //filter method takes arrow function
      //      this.productsListOfCategory=this.products.filter(prd=>prd.categoryId==this.selectedCategoryId)
      }

// getProductsByCatergoy(catId:number){
//   this.products= this.products.filter(p=>p.categoryId==catId)
// }
updateOrderTotalPrice(price:number,id:number){
  this.totalPrice+=price;
  //emit event
  //when the totalPrice changes, fire the event
  this.onTotalPriceChange.emit(this.totalPrice)

  //decreasing the quantity
  let x = this.productsService.getProductByID(id)
  if(x?.quantity){
    x.quantity--;
  }
}
}

