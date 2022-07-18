import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeColor]'
})
export class ChangeColorDirective {

  constructor(private _element: ElementRef) {
    this._element.nativeElement.style.color = 'blue'
  }
  @HostListener('mouseenter') mouseEnter(){
    this.changeColor('red')
  }

  @HostListener('mouseleave') mouseLeave(){
    this.changeColor('green')
  }

  changeColor(color){
    this._element.nativeElement.style.color= color
  }


}
