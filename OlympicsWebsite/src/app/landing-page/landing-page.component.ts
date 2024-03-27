import { Component, ViewChild, ViewEncapsulation, HostListener,ChangeDetectorRef } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ThemeService } from '../services/theme.service';
import { Image } from '../models/image';
import { horizontalPhotos, verticalPhotos } from './landing-page-photos';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  providers: [ThemeService],
  imports: [NavigationComponent, CarouselComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
  encapsulation: ViewEncapsulation.None,
})

export class LandingPageComponent {
  @ViewChild(NavigationComponent) nav?: NavigationComponent;
  @ViewChild(CarouselComponent) car?: CarouselComponent;
  photos: Image[] = [];
  endDate = new Date('April 21, 2024 09:00:00').getTime();
  public innerWidth: any;
  public innerHeight:any;
  desktop: boolean = true;

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    this.innerHeight = window.innerHeight;
    if (this.innerWidth > window.innerHeight) {
      if (!this.desktop) { this.desktop = !this.desktop; this.getPhotos(); }
    } else {
      if (this.desktop) { this.desktop = !this.desktop; this.getPhotos(); }
    }
  }


  constructor(private themeService: ThemeService, private cdr: ChangeDetectorRef) { }
  getPhotos() {
    if (this.innerWidth > this.innerHeight) {
      this.photos = horizontalPhotos;
    }
    else {
      this.photos = verticalPhotos;
    }
    this.cdr.detectChanges();
  }

  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.innerHeight=window.innerHeight;
    this.getPhotos();
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
    setInterval(() => {
      this.getSeconds()
    }, 1000);
  }

  getDays() {
    let now = new Date().getTime();
    let remaining = this.endDate - now;
    return String(Math.floor(remaining / (1000 * 3600 * 24))).padStart(2, "0");
  }

  getHours() {
    let endDate = new Date('April 20, 2024 00:00:00').getTime();
    let now = new Date().getTime();
    let remaining = this.endDate - now;
    return String(Math.floor(remaining % (1000 * 3600 * 24) / (1000 * 3600))).padStart(2, "0");
  }

  getMinutes() {
    let now = new Date().getTime();
    let remaining = this.endDate - now;
    return String(Math.floor(remaining % (1000 * 3600) / (1000 * 60))).padStart(2, "0");
  }

  getSeconds() {
    let now = new Date().getTime();
    let remaining = this.endDate - now;
    return String(Math.floor(remaining % (1000 * 60) / (1000))).padStart(2, "0");
  }
}
