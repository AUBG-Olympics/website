import { Directive, HostListener } from '@angular/core';
import { MemberWidgetComponent } from '../components/member-widget/member-widget.component';

@Directive({
  selector: '[appHover]',
  standalone: true
})
export class HoverDirective {

  constructor(private host: MemberWidgetComponent) { }

  @HostListener('mouseenter', ['$event']) onMouseEnter(){
    this.host.isHovered = true;
  }

  @HostListener('mouseleave', ['$event']) onMouseLeave(){
    this.host.isHovered = false;
  }
}
