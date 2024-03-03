import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SchedulePageComponent {

}
