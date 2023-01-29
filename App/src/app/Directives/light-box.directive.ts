import { Directive, ElementRef, HostListener, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appLightBox]'
})
export class LightBoxDirective /*implements OnChanges*/{
  @Input('appLightBox') highLightedColor:string="red";
  constructor(private elemRef:ElementRef) { 
    this.elemRef.nativeElement.style.border=`5px ${this.highLightedColor} solid`

    // elemRef.nativeElement.style.border=`5px ${this.highLightedColor} solid`
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //   this.elemRef.nativeElement.style.border=`5px ${this.highLightedColor} solid`
  // }
  @HostListener('mouseenter') onMouseEnter(){
    this.elemRef.nativeElement.style.border=`5px green solid`
  }
  @HostListener('mouseleave') onMouseOut(){
  this.elemRef.nativeElement.style.border="5px blue solid"
  }
}
