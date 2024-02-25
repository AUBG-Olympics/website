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

  public counter = 0;

  constructor(private el: ElementRef, private renderer: Renderer2, private builder: AnimationBuilder, private host: SportWidgetComponent) { }

  @HostListener('click', ['$event']) onClick(ev: MouseEvent): void {  
    let target = ev.target as HTMLElement;
    if(target.classList.contains('button') != true){
      if(this.counter == 0){
        this.counter++;
        this.rotated = false;
        this.animateElement(this.rotateIn());
      }
      else if(this.counter == 1){
        this.rotated = true;
        this.animateElement(this.rotateOut());
        this.counter = 0;
      }
    }
    
  }

  private animateElement(metadata: AnimationMetadata[]) {
    const animation = this.builder.build(metadata);
    const player = animation.create(this.el.nativeElement);

    player.onStart(() => {
      this.rotate.emit(this.rotated)
      //this.host.isHidden = this.rotated;
      //this.host.hide = true;
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
}
