import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appRotate]',
})
export class RotateDirective {
  defaultStep: string = '10';
  totalRotation: number = 0;

  @Input()
  step: string;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  onClick(): void {
    this.el.nativeElement.style.transform = `rotate(${this.calculateRotation(
      this.step || this.defaultStep
    )}deg)`;
  }

  calculateRotation(step: string): number {
    this.totalRotation += parseInt(step);
    return this.totalRotation;
  }
}
