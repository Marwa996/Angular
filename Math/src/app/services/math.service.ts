import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {

  timer:any

  constructor() { }
    Math(start:Number,limit:number):Observable<string>{
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
}
