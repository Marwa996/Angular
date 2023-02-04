import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent implements OnInit{
  
timer:any;
  mycurrent:number;
  mylimit:number;
  list:string[];
  sub:Subscription | undefined;

  constructor(){
    this.mycurrent=1;
    this.mylimit=2;
    this.list=[];

    }
    Math(start:number,limit:number):Observable<string>{
      return new Observable<string>((Observable)=>{
        let i=0;
        let string='';
        this.timer=setInterval(()=>{
          if(i!=limit){
            string=`${start}*${i}=${start*i}`;
            Observable.next(string)
            i++;
          }
        },1000)
      })
    }
    Subscription(){
      clearInterval(this.timer)
    }

    ngOnInit(): void {
      this.sub=this.Math(this.mycurrent,this.mylimit
    ).subscribe(num=>{
        this.list.push(num)
      })
    }
    change(x:string,y:string){
      this.sub?.unsubscribe()
      this.list=[];
      this.sub=this.Math(Number(x),Number(y)).subscribe(num=>{
        this.list.push(num)
      })
    }
  }

