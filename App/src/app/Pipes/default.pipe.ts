import { Pipe, PipeTransform, ElementRef } from '@angular/core';

@Pipe({
  name: 'default'
})
export class FilterPipe implements PipeTransform {
  // elemRef!: ElementRef;
  transform(realURL:string, imgURL:string): string {
    if(realURL){
      return realURL;
    }else
      return imgURL;
    // return null;
  }

}
