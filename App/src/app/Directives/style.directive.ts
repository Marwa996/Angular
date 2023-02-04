import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStyle]'
})
export class StyleDirective {

  original:string=this.elemRef.nativeElement.style;

  constructor(private elemRef:ElementRef) {
    this.elemRef.nativeElement.style.backgroundColor ="grey";
    this.elemRef.nativeElement.style.color ="white";
    this.elemRef.nativeElement.style.fontWeight ="bold";
    this.elemRef.nativeElement.style.border ="5px white solid";
   }

  @HostListener('mouseenter') onMouseEnter(){
    this.elemRef.nativeElement.style.backgroundColor ="lightblue";
    this.elemRef.nativeElement.style.color ="black";
  }
  @HostListener('mouseleave') onMouseOut(){
    this.elemRef.nativeElement.style.backgroundColor ="grey";
    this.elemRef.nativeElement.style.color ="white";
}
}