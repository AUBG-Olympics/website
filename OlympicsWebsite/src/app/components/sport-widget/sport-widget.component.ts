import { Component, ViewEncapsulation } from '@angular/core';
import { RotateDirective } from '../../directives/rotate.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sport-widget',
  standalone: true,
  imports: [RotateDirective, CommonModule],
  templateUrl: './sport-widget.component.html',
  styleUrl: './sport-widget.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class SportWidgetComponent {
  public isHidden: boolean = true;

  public hide: boolean = true;

  public onRotate(ev: boolean) {
    this.hide = false;
    setTimeout(() => {
      this.isHidden = ev;
      this.hide = true;
    }, 530);
  }
}
