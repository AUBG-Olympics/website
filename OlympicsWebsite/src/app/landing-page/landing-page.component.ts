import { Component, ViewChild } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { CarouselComponent } from '../carousel/carousel.component';

type Image = {
  src:string;
};

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [NavigationComponent,CarouselComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css',
})

export class LandingPageComponent {
  @ViewChild(NavigationComponent) nav?: NavigationComponent;
  @ViewChild(CarouselComponent) car?:CarouselComponent;
  photos:Image[]=[];
  getPhotos(){
    this.photos=[{src:"https://scontent.fsof11-1.fna.fbcdn.net/v/t39.30808-6/407350386_757418879749858_5087436530491221890_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_ohc=fZtR02CcY4sAX8RROqy&_nc_ht=scontent.fsof11-1.fna&oh=00_AfCufkHkd9js_GkUR2D_XcGfgoHFvs21SJLMQFRAVoJxbg&oe=65BC61BE"},{src:'https://scontent.fsof11-1.fna.fbcdn.net/v/t39.30808-6/406263529_757418919749854_4016185538037317152_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=3635dc&_nc_ohc=UG8qCTpnaOkAX-MtIE-&_nc_ht=scontent.fsof11-1.fna&oh=00_AfCnyhIbbyMAhkM-FXMyEeoB6dVF19dXDBoeHQ2sIYVNbw&oe=65BBF9AA'},{src:'https://scontent.fsof11-1.fna.fbcdn.net/v/t39.30808-6/406261675_757419016416511_1611717665302417932_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=3635dc&_nc_ohc=y3kP-3zdSnAAX80DDQs&_nc_ht=scontent.fsof11-1.fna&oh=00_AfC04GPylJhHA3uLXWxjPVpRjPjGdL0Os9VgrqBvLnEBTQ&oe=65BC251B'}];
  }
  ngOnInit(){
    this.getPhotos();
    setInterval(() => {
      this.getSeconds() 
    }, 1000);
  }
  getDays(){
    let endDate=new Date('April 20, 2024 00:00:00').getTime();
    let now=new Date().getTime();
    let remaining=endDate-now;
    return Math.floor(remaining/ (1000 * 3600 * 24));
  }

  getHours(){
    let endDate=new Date('April 20, 2024 00:00:00').getTime();
    let now=new Date().getTime();
    let remaining=endDate-now;
    return Math.round(remaining% (1000 * 3600 * 24)/(1000 * 3600 ));
  }

  getMinutes(){
    let endDate=new Date('April 20, 2024 00:00:00').getTime();
    let now=new Date().getTime();
    let remaining=endDate-now;
    return Math.round(remaining% (1000 * 3600)/(1000 * 60 ));
  }
  
  getSeconds(){
    let endDate=new Date('April 20, 2024 00:00:00').getTime();
    let now=new Date().getTime();
    let remaining=endDate-now;
    return Math.round(remaining% (1000 * 60)/(1000));
  }
}
