

import { Component, HostListener } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Image } from '../models/image';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { zeusSponsors, poseidonSponsors, athenaSponsors, hephaestusSponsors, financialSponsors } from '../sponsors-page/sponsorsInfo';

@Component({
  selector: 'app-form-page',
  standalone: true,
  imports: [NavigationComponent,CommonModule,NgOptimizedImage],
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css'
})
export class FormPageComponent {
  safeUrl: SafeResourceUrl | null = null;
  allPhotos:Image[]=[];
  leftPhotos:Image[]=[];
  rightPhotos:Image[]=[];
  isMobile:boolean=false;

  constructor(
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {
    const themePreference = sessionStorage.getItem('theme');

    if(themePreference === 'dark'){
      this.themeService.setDarkTheme();
    } else if(themePreference === 'light'){
      this.themeService.setLightTheme();
    } else{
      this.themeService.setDDayTheme();
    }
    this.route.queryParamMap.subscribe(params => {
      const urlParam = params.get('formUrl');
      if (urlParam) {
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(decodeURIComponent(urlParam));
      }
    });
    this.getPhotos();
    this.checkScreenSize();
  }

    @HostListener('window:resize', ['$event'])
    onResize() {
      this.checkScreenSize();
    }
  
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768;
      if(this.isMobile){
      this.rightPhotos=this.allPhotos;
      this.leftPhotos=[];
      }
      else {
        [this.leftPhotos,this.rightPhotos]=this.splitAndShuffle(this.allPhotos);
      }
      console.log(this.allPhotos)
    }

   getPhotos() {
      this.allPhotos=[];
      this.allPhotos=this.allPhotos.concat(financialSponsors);
      this.allPhotos=this.allPhotos.concat(zeusSponsors);
      this.allPhotos=this.allPhotos.concat(poseidonSponsors);
      this.allPhotos=this.allPhotos.concat(athenaSponsors);
      this.allPhotos=this.allPhotos.concat(hephaestusSponsors);
    }

    splitAndShuffle(arr:Image[]) {
      // Shuffle the array using Fisher-Yates shuffle
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    
      // Split the shuffled array in half
      const middle = Math.ceil(arr.length / 2);
      const firstHalf = arr.slice(0, middle);
      const secondHalf = arr.slice(middle);
    
      return [firstHalf, secondHalf];
    }
}
