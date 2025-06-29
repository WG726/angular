import { Directive, ElementRef, Renderer2, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appGrade]',
  standalone: true
})
export class GradeDirective {

  @Input('appGrade') mark: number = 0;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.mark >= 90) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'green');
    } else if (this.mark < 90 && this.mark >= 60) {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'color', 'red');
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'color', 'black');
  }

}
