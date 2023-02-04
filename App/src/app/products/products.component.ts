import { ProductsService } from './../services/products.service';
import { EventEmitter, OnChanges, Output, SimpleChanges } from '@angular/core';
// import { ICategory } from './../sharedClasses/test';
import { Component, Input, OnInit } from '@angular/core';
import { IProduct, ICategory } from '../sharedClasses/test';
import { Router } from '@angular/router';


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
  today:Date = new Date();
  date:string;
  //received from parent Shopping cart
  @Input() selectedCategoryId:number=0
  
  //declaring variable to be sent to the parent 
  totalPrice:number=0;
  
  //creating event to change the output
  //event emitter is is used to add a callback function that's going to be executed when the event is triggered
  //output decorator so that the parent(cart) can see the event
  @Output() onTotalPriceChange: EventEmitter<{price:number,date:string}>;
  // @Output() productDate: EventEmitter<number>;
  //to inject the service, we call it in the constructor
  constructor(private productsService:ProductsService,
              private router:Router) { 
    
    this.onTotalPriceChange=new EventEmitter<{price:number,date:string}>()
    // this.productDate=new EventEmitter<number>();
    this.date="";

  //////////products initialized in products.service
  
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
  this.date=this.today.toLocaleString();
  console.log(this.date);
  //emit event
  //when the totalPrice changes, fire the event

  this.onTotalPriceChange.emit({price:this.totalPrice,date:this.date})
  // this.productDate.emit(this.date);
  //decreasing the quantity
  let x = this.productsService.getProductByID(id)
  if(x?.quantity){
    x.quantity--;
  }
}

//opening product details component
openProductDetails(pid:number){
  this.router.navigate(['/products',pid])
}

}

