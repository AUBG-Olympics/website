import { Component, ViewChild, ViewEncapsulation, HostListener } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { ThemeService } from '../services/theme.service';
import { Image } from '../models/image';

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
  desktop:boolean=true;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
    if(this.innerWidth>window.innerHeight){
      if(!this.desktop){this.desktop=!this.desktop; this.getPhotos();}
      }else{
        if(this.desktop){this.desktop=!this.desktop;this.getPhotos();}
      }
    }
    

  constructor(private themeService: ThemeService) { }
  getPhotos() {
    if(this.innerWidth>window.innerHeight){
    this.photos = [
      {
        src: "https://res.cloudinary.com/dq9gemegi/image/upload/v1709549488/CarouselPhotos/425254669_810443281114084_2978768452918607329_n_u264qs.jpg",
        description: '',link:''
      },
      {
        src: 'https://res.cloudinary.com/dq9gemegi/image/upload/v1709549486/CarouselPhotos/428502175_810441871114225_4628992403078249897_n_gdnfw4.jpg',
        description: '',link:''
      },
      {
        src: 'https://res.cloudinary.com/dq9gemegi/image/upload/v1709549485/CarouselPhotos/428491293_813861317438947_2298361993371666072_n_plgzly.jpg',
        description: '',link:''
      },
      {
        src: 'https://res.cloudinary.com/dq9gemegi/image/upload/v1709549483/CarouselPhotos/428508360_813861040772308_3018515262349797840_n_zy7lto.jpg',
        description: '',link:''
      },
      {
        src: 'https://res.cloudinary.com/dq9gemegi/image/upload/v1709549483/CarouselPhotos/431059903_813858507439228_6567449649785649249_n_aqmv9j.jpg',
        description: '',link:''
      },
      {
        src: 'https://res.cloudinary.com/dq9gemegi/image/upload/v1709549478/CarouselPhotos/424972233_810440724447673_9217132925745596085_n_k7zae2.jpg',
        description: '',link:''
      }
    ];}
    else{
      this.photos = [
        {
          src: "https://res.cloudinary.com/dq9gemegi/image/upload/v1709550920/CarouselPhotos/image3_azvijg.png",
          description: '',link:''
        },
        {
          src: 'https://res.cloudinary.com/dq9gemegi/image/upload/v1709550288/CarouselPhotos/425330340_810440677781011_8222974675471495997_n_ynkadr.jpg',
          description: '',link:''
        },
        {
          src: 'https://res.cloudinary.com/dq9gemegi/image/upload/v1709550291/CarouselPhotos/image_u5ytqp.png',
          description: '',link:''
        },
        {
          src: 'https://res.cloudinary.com/dq9gemegi/image/upload/v1709550741/CarouselPhotos/image2_n4wm57.png',
          description: '',link:''
        }
      ]
    }
    console.log(this.photos)
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
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
