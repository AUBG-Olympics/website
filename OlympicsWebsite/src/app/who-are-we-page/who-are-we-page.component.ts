import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';


type Tab={
  src:String,
  text:String,
  position:String
}

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
  tabs:Tab[]=[];

  constructor(private themeService: ThemeService){}

  ngOnInit(){
    this.getTabs();

    const themePreference = sessionStorage.getItem('theme');

    if(themePreference === 'dark'){
      this.themeService.setDarkTheme();
    } else if(themePreference === 'light'){
      this.themeService.setLightTheme();
    } else if(themePreference === 'dday'){
      this.themeService.setDDayTheme();
    }
  }
  getTabs(){
    for(let i=0;i<3;i++){
      this.tabs.push({
        src:'https://aubgolympics.com/wp-content/uploads/2021/05/maybe.jpg',
        text:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        position:i%2==0?'left':'right'
      })
    }
  }
}
