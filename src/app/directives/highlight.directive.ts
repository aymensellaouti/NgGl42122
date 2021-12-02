import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{
  @Input() in = 'yellow';
  @Input() out = 'red';
  //Vous définissez les propriétés gérées par la directive
  @HostBinding('style.backgroundColor') bgc ;
  constructor(
    private element: ElementRef
  ) { }

  ngOnInit(): void {
       this.bgc = this.out;
    }
  //Quels events je gére
  @HostListener('mouseenter') onMouseEnter() {
    this.bgc = this.in;
    this.element.nativeElement.innerHTML = 'IN';
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc = this.out;
    this.element.nativeElement.innerHTML = 'OUT';
  }
}
