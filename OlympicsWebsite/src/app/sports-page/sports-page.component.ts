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
export class SportsPageComponent implements OnInit {
  public sportsData: Sport[] = ddaySports;

  constructor(private themeService: ThemeService) { }
  encodedDdaySports:any;
 

  ngOnInit() {
     // List of keys to encode (excluding RulesUrl)
  const urlKeysToEncode = [
    'SignUpUrl',
    'SignUpUrlMen',
    'SignUpUrlWomen',
    'SignUpUrlMenAboveEighty',
    'SignUpUrlMenBelowEighty',
    'SignUrlDoubles'
  ];

  // Create a deep copy and encode only the specified URLs
    this.encodedDdaySports = ddaySports.map(sport => {
    const encodedSport = { ...sport };

    urlKeysToEncode.forEach(key => {
      if ((encodedSport as any)[key]) {
        (encodedSport as any)[key] = encodeURIComponent((encodedSport as any)[key]);
      }
    });

    return encodedSport;
  });
    const themePreference = sessionStorage.getItem('theme');

    if (themePreference === 'dark') {
      this.themeService.setDarkTheme();
    } else if (themePreference === 'light') {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDDayTheme();
    }


  }
}
