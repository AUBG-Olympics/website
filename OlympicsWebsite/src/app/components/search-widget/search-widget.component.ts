import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-widget',
  standalone: true,
  imports: [],
  templateUrl: './search-widget.component.html',
  styleUrl: './search-widget.component.css'
})
export class SearchWidgetComponent {
  
  @Output() filter: EventEmitter<string> = new EventEmitter();

  public onFilterSelected(department: string): void{
    this.filter.emit(department);
  }
}
