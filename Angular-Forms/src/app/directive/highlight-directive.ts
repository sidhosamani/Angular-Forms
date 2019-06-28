import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[colorHighlight]'
})
export class HighlightDirective {
  constructor(
      private elementRef: ElementRef,
      private render: Renderer2
    ) { }

  ngOnInit(){
    this.render.setStyle(this.elementRef.nativeElement,'color','blue');
  }

}
