import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location, CommonModule } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { ThemeService } from '../services/theme.service';
import {Event} from '../models/event'
import { postersDDay25, postersFall24, postersSpring25 } from './posters';

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
    } else {
      this.themeService.setDDayTheme();
    }
  }
  getEventInfo(){
    if(this.event=='fall'){
      this.title='FALL 24'
      this.pictures=postersFall24;
    }else if(this.event=='spring'){
      this.title='SPRING 25'
      this.pictures=postersSpring25;
    }
    else if(this.event=='dday'){
      this.title='D-DAY 25';
      this.pictures=postersDDay25;
    }
  }
}
