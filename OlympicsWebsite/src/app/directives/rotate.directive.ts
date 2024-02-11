import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Output, Renderer2 } from '@angular/core';
import { AnimationBuilder, AnimationMetadata, animate, style } from '@angular/animations';
import { SportWidgetComponent } from '../components/sport-widget/sport-widget.component';

@Directive({
  selector: '[appRotateDirective]',
  standalone: true
})
export class RotateDirective {

  @Output() public rotate = new EventEmitter<boolean>();

  public rotated: boolean = true;

  constructor(private el: ElementRef, private renderer: Renderer2, private builder: AnimationBuilder, private host: SportWidgetComponent) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.rotated = false;
    this.animateElement(this.rotateIn());

  }

  @HostListener('mouseleave') onMouseLeave() {
    this.rotated = true;
    this.animateElement(this.rotateOut());
  }

  private animateElement(metadata: AnimationMetadata[]) {
    const animation = this.builder.build(metadata);
    const player = animation.create(this.el.nativeElement);

    player.onStart(() => {
      this.rotate.emit(this.rotated)
    })

    player.play();

  }

  private rotateIn(): AnimationMetadata[] {
    return [
      style({ transform: 'rotateX(0)' }),
      animate('1s ease-in', style({ transform: 'rotateX(180deg)' }))
    ];
  }

  private rotateOut(): AnimationMetadata[] {
    return [
      style({ transform: 'rotateX(180deg)' }),
      animate('1s ease-out', style({ transform: 'rotateX(0)' }))
    ];
  }

  test() {
    console.log('test')
  }

}
