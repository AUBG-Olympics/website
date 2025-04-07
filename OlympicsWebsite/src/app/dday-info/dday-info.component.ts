import { Component } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-dday-info',
  standalone: true,
  imports: [NavigationComponent],
  templateUrl: './dday-info.component.html',
  styleUrl: './dday-info.component.css'
})
export class DdayInfoComponent {
  constructor(private themeService: ThemeService){}  
  ngOnInit(){
    const themePreference = sessionStorage.getItem('theme');

    if(themePreference === 'dark'){
      this.themeService.setDarkTheme();
    } else if(themePreference === 'light'){
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDDayTheme();
    }
  }
}
