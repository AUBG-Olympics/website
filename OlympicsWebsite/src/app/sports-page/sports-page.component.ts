import { Component } from '@angular/core';
import { SportWidgetComponent } from '../components/sport-widget/sport-widget.component';
import { Sport } from '../models/sport';
import { ddaySports } from '../data/sports';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-sports-page',
  standalone: true,
  imports: [SportWidgetComponent, CommonModule, NavigationComponent],
  templateUrl: './sports-page.component.html',
  styleUrl: './sports-page.component.css'
})
export class SportsPageComponent {
  public sportsData: Sport[] = ddaySports;
}
