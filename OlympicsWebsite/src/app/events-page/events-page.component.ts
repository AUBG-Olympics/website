import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import {Event} from '../models/event'
import { postersDDay24, postersFall23, postersSpring24 } from './posters';

@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [NavigationComponent,CommonModule],
  providers: [ThemeService],
  templateUrl: './events-page.component.html',
  styleUrl: './events-page.component.css',
  encapsulation: ViewEncapsulation.None
})

export class EventsPageComponent {
  @ViewChild(NavigationComponent) nav?: NavigationComponent;
  constructor(  private route: ActivatedRoute,  private location: Location, private themeService: ThemeService){}
  event = this.route.snapshot.paramMap.get('event');
  title='';
  pictures:Event[]=[];
  ngOnInit(){
    this.getEventInfo();

    const themePreference = sessionStorage.getItem('theme');

    if(themePreference === 'dark'){
      this.themeService.setDarkTheme();
    } else if(themePreference === 'light'){
      this.themeService.setLightTheme();
    } else if(themePreference === 'dday'){
      this.themeService.setDDayTheme();
    }
  }
  getEventInfo(){
    if(this.event=='fall'){
      this.title='FALL 23'
      this.pictures=postersFall23;
    }else if(this.event=='spring'){
      this.title='SPRING 24'
      this.pictures=postersSpring24;
    }
    else if(this.event=='dday'){
      this.title='D-DAY 24';
      this.pictures=postersDDay24;
    }
  }
}
