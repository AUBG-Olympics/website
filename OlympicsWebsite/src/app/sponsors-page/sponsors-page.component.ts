import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ThemeService } from '../services/theme.service';
import {picturesInfo} from './sponsorsInfo';
import {Image} from '../models/image';

@Component({
  selector: 'app-sponsors-page',
  standalone: true,
  imports: [CarouselComponent,NavigationComponent],
  templateUrl: './sponsors-page.component.html',
  styleUrl: './sponsors-page.component.css',
  providers: [ThemeService],
  encapsulation: ViewEncapsulation.None
})
export class SponsorsPageComponent {
  @ViewChild(CarouselComponent) car?:CarouselComponent;
  @ViewChild(NavigationComponent) nav?: NavigationComponent;
  photosTier1:Image[]=[];
  photosTier2:Image[]=[];
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
    for(let i=0;i<10;i++){
    this.photosTier1.push({
      src:picturesInfo[i].src,
    description:picturesInfo[i].description});
    this.photosTier2.push({
      src:picturesInfo[9-i].src,
      description:picturesInfo[9-i].description});
      this.photosTier3.push({
        src:picturesInfo[9-i].src,
        description:picturesInfo[9-i].description});
        this.photosTier4.push({
          src:picturesInfo[9-i].src,
          description:picturesInfo[9-i].description});
          this.photosTier5.push({
            src:picturesInfo[9-i].src,
            description:picturesInfo[9-i].description});
    }
    this.shuffle(this.photosTier1);
    this.shuffle(this.photosTier2);
    this.shuffle(this.photosTier3);
    this.shuffle(this.photosTier4);
    this.shuffle(this.photosTier5);
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
