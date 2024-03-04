import { CommonModule } from '@angular/common';
import { Component, ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-schedule-page',
  standalone: true,
  imports: [CommonModule, NavigationComponent],
  templateUrl: './schedule-page.component.html',
  styleUrl: './schedule-page.component.css',
  encapsulation: ViewEncapsulation.None
})
export class SchedulePageComponent {
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
