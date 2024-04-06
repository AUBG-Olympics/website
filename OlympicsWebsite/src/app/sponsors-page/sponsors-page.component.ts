import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ThemeService } from '../services/theme.service';
import {zeusSponsors,poseidonSponsors,artemisSponsors,athenaSponsors,hephaestusSponsors} from './sponsorsInfo';
import {Image} from '../models/image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sponsors-page',
  standalone: true,
  imports: [CarouselComponent,NavigationComponent,CommonModule],
  templateUrl: './sponsors-page.component.html',
  styleUrl: './sponsors-page.component.css',
  providers: [ThemeService],
  encapsulation: ViewEncapsulation.None
})
export class SponsorsPageComponent {
  @ViewChild(CarouselComponent) car?:CarouselComponent;
  @ViewChild(NavigationComponent) nav?: NavigationComponent;
  photosTier2:Image[]=[];
  photosTier1:Image[]=[];
  photosTier3:Image[]=[];
  photosTier4:Image[]=[];
  photosTier5:Image[]=[];
  numOfSlides:number=1;
  innerWidth:any;

  constructor(private themeService: ThemeService){}
  
  ngOnInit(){
 
    this.getPhotos();
  this.numOfSlides=4;    
    const themePreference = sessionStorage.getItem('theme');
    if(themePreference === 'dark'){
      this.themeService.setDarkTheme();
    } else if(themePreference === 'light'){
      this.themeService.setLightTheme();
    } else if(themePreference === 'dday'){
      this.themeService.setDDayTheme();
    }
  }

  ngAfterViewInit(){
    setTimeout(function(){
      const root = document.documentElement.style;
      root.setProperty('--height', '100%');
      root.setProperty('--color','var(--textColor)')
  },500);
  }

  getPhotos(){
   this.photosTier1=zeusSponsors;
   this.photosTier2=poseidonSponsors;
   this.photosTier3=athenaSponsors;
   this.photosTier4=hephaestusSponsors;
   this.photosTier5=artemisSponsors;
  }


  shuffle(array:Image[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
}
