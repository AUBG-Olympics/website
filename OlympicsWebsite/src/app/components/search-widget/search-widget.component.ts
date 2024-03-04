import { Component, EventEmitter, NgZone, Output } from '@angular/core';
import { elementAt, take } from 'rxjs';

@Component({
  selector: 'app-search-widget',
  standalone: true,
  imports: [],
  templateUrl: './search-widget.component.html',
  styleUrl: './search-widget.component.css'
})
export class SearchWidgetComponent {

  @Output() filter: EventEmitter<string> = new EventEmitter();

  constructor(private ngZone: NgZone) {

  }

  public onFilterSelected(element: any, department: string): void {
    this.filter.emit(department);
    let target: HTMLElement = element.target;
    let buttons = document.querySelectorAll('.option-content');

    this.ngZone.onStable
      .asObservable()
      .pipe(take(1))
      .subscribe(() => {
        buttons.forEach((button) => {
          if (button.classList.contains('selected')) {
            button.classList.remove('selected')
          }
        });

        if(target.parentElement){
          target.parentElement?.classList.add('selected');
        }
      });
  }
}