import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { SearchWidgetComponent } from '../components/search-widget/search-widget.component';

@Component({
  selector: 'app-meet-the-team-page',
  standalone: true,
  imports: [CommonModule, NavigationComponent, SearchWidgetComponent],
  templateUrl: './meet-the-team-page.component.html',
  styleUrl: './meet-the-team-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class MeetTheTeamPageComponent {
  public onUserFilter(department: string){
    console.log(department);
  }
}
