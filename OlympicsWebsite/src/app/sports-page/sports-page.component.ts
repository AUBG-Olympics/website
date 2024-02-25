import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SportWidgetComponent } from '../components/sport-widget/sport-widget.component';
import { Sport } from '../models/sport';
import { ddaySports } from '../data/sports';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-sports-page',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  imports: [SportWidgetComponent, CommonModule, NavigationComponent],
  templateUrl: './sports-page.component.html',
  styleUrl: './sports-page.component.css',
})
export class SportsPageComponent implements OnInit{
  public sportsData: Sport[] = ddaySports;

  constructor(private themeService: ThemeService){}

  ngOnInit(){
    const themePreference = sessionStorage.getItem('theme');

    if(themePreference === 'dark'){
      this.themeService.setDarkTheme();
    } else if(themePreference === 'light'){
      this.themeService.setLightTheme();
    } else if(themePreference === 'dday'){
      this.themeService.setDDayTheme();
    }
  }
}
