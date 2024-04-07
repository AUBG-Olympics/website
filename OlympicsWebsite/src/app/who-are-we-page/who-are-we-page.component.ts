import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { Tab } from '../models/tab';
import { whoWeAreTabsBg, whoWeAreTabsEn } from '../data/who-we-are-tabs';

@Component({
  selector: 'app-who-are-we-page',
  standalone: true,
  imports: [NavigationComponent,CommonModule],
  templateUrl: './who-are-we-page.component.html',
  providers: [ThemeService],
  styleUrls: ['./who-are-we-page.component.css','../app.component.css'],
  encapsulation: ViewEncapsulation.None
})

export class WhoAreWePageComponent {
  @ViewChild(NavigationComponent) nav?: NavigationComponent;
  public tabs:Tab[] = whoWeAreTabsEn;

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
