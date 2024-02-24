import { Component, ViewChild,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NavigationComponent } from '../navigation/navigation.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';

type Poster={
  src:String,
  hover:String
}

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
  pictures:Poster[]=[];
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
      for(let i=0;i<3;i++){
        this.pictures.push({
          src:'https://z-p3-scontent.fsof11-1.fna.fbcdn.net/v/t1.15752-9/423147414_7033076963484805_8497623959281473128_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=82hpWeENdd4AX_-KcQA&_nc_ht=z-p3-scontent.fsof11-1.fna&oh=03_AdR7TxobxexmTAnFesqf-F1ibzKRtxTC2lVt9tZl39yzSA&oe=65EB65A9',
          hover:'Basketball'
        })
      }
    }else if(this.event=='spring'){
      this.title='SPRING 23'
      for(let i=0;i<3;i++){
        this.pictures.push({
          src:'https://z-p3-scontent.fsof11-1.fna.fbcdn.net/v/t1.15752-9/423147414_7033076963484805_8497623959281473128_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=82hpWeENdd4AX_-KcQA&_nc_ht=z-p3-scontent.fsof11-1.fna&oh=03_AdR7TxobxexmTAnFesqf-F1ibzKRtxTC2lVt9tZl39yzSA&oe=65EB65A9',
          hover:'Basketball'
        })
      }
    }
    else if(this.event=='dday'){
      this.title='D-DAY 23';
      for(let i=0;i<3;i++){
        this.pictures.push({
          src:'https://z-p3-scontent.fsof11-1.fna.fbcdn.net/v/t1.15752-9/423147414_7033076963484805_8497623959281473128_n.png?_nc_cat=107&ccb=1-7&_nc_sid=8cd0a2&_nc_ohc=82hpWeENdd4AX_-KcQA&_nc_ht=z-p3-scontent.fsof11-1.fna&oh=03_AdR7TxobxexmTAnFesqf-F1ibzKRtxTC2lVt9tZl39yzSA&oe=65EB65A9',
          hover:'Basketball'
        })
      }
    }
  }
}
