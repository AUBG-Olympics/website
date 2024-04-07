import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { NavigationComponent } from '../navigation/navigation.component';
import { ThemeService } from '../services/theme.service';
import { zeusSponsors, poseidonSponsors, artemisSponsors, athenaSponsors, hephaestusSponsors } from './sponsorsInfo';
import { Image } from '../models/image';
import { CommonModule, IMAGE_LOADER, ImageLoader, NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';


export function customCloudinaryLoader(): any {
  return (urlObj: any) => {
    // Modify the URL to remove or adjust the automatic transformations
    // For example, removing the redundant part
    let url = urlObj.src;
    const baseUrl = 'https://res.cloudinary.com/dq9gemegi/image/upload/';
    const transformationSegment = '/f_auto,q_auto,w_1920/';
    if (url.includes(transformationSegment)) {
      url = url.replace(transformationSegment, '/');
    }
    // Ensure the base URL is correctly included
    if (!url.startsWith(baseUrl)) {
      url = baseUrl + url;
    }
    return url;
  };
}

@Component({
  selector: 'app-sponsors-page',
  standalone: true,
  imports: [CarouselComponent, NavigationComponent, CommonModule, NgOptimizedImage],
  templateUrl: './sponsors-page.component.html',
  styleUrl: './sponsors-page.component.css',
  providers: [ThemeService, {
    provide: IMAGE_LOADER,
    useFactory: customCloudinaryLoader,
    deps: [],
  },],
  encapsulation: ViewEncapsulation.None
})
export class SponsorsPageComponent {
  @ViewChild(CarouselComponent) car?: CarouselComponent;
  @ViewChild(NavigationComponent) nav?: NavigationComponent;
  photosTier2: Image[] = [];
  photosTier1: Image[] = [];
  photosTier3: Image[] = [];
  photosTier4: Image[] = [];
  photosTier5: Image[] = [];
  numOfSlides: number = 1;
  innerWidth: any;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {

    this.getPhotos();
    this.numOfSlides = 4;
    const themePreference = sessionStorage.getItem('theme');
    if (themePreference === 'dark') {
      this.themeService.setDarkTheme();
    } else if (themePreference === 'light') {
      this.themeService.setLightTheme();
    } else if (themePreference === 'dday') {
      this.themeService.setDDayTheme();
    }
  }

  ngAfterViewInit() {
    setTimeout(function () {
      const root = document.documentElement.style;
      root.setProperty('--height', '100%');
      root.setProperty('--color', 'var(--textColor)')
    }, 500);
  }

  getPhotos() {
    this.photosTier1 = zeusSponsors;
    this.photosTier2 = poseidonSponsors;
    this.photosTier3 = athenaSponsors;
    this.photosTier4 = hephaestusSponsors;
    this.photosTier5 = artemisSponsors;
  }
}