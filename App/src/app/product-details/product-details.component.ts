import { IProduct } from './../sharedClasses/test';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit{
  private prdId:number=0;
  prd:IProduct|undefined;
  constructor(private activatedRoute:ActivatedRoute, private prdService:ProductsService){
  
  }

  ngOnInit(): void {
    this.prdId=Number(this.activatedRoute.snapshot.paramMap.get("id"))
    this.prd=this.prdService.getProductByID(this.prdId)
  }
}
