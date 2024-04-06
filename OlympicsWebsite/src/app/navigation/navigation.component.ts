import { Component } from '@angular/core';
import { ThemeComponent } from '../components/theme/theme.component';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../services/theme.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ThemeComponent, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  menuStatus = false;
  ddayStatus = false;
  eventsStatus = false;
  public themeStatus: boolean = false;
  private currentPage: any = '';

  constructor(private themeService: ThemeService, private currRoute: ActivatedRoute, private router: Router) { }

  showMenu() {
    this.menuStatus = !this.menuStatus;
    let body: HTMLBodyElement | null = document.querySelector('body');

    let html = document.querySelector('html');

    if(html){
      html.style.overflow = 'hidden';
    }

    if(this.menuStatus){
      if(body){
        body.style.overflow = 'hidden';
      }
    } else{
      if(body){
        body.style.overflow = 'auto';
      }
    }
  }

  changeMenu(menu: string) {
    if (menu == "dday") {
      this.ddayStatus = !this.ddayStatus;
    } else if (menu == "events") {
      this.eventsStatus = !this.eventsStatus;
    } else if (menu == 'theme') {
      this.themeStatus = !this.themeStatus;
    }
  }

  public onThemeChange(theme: string) {
    switch (theme) {
      case 'traditional':
        this.themeService.setLightTheme();
        break;
      case 'reversed':
        this.themeService.setDarkTheme();
        break;
      case 'dday':
        this.themeService.setDDayTheme();
    }


    this.menuStatus = false;
    this.themeStatus = false;

    let body: HTMLBodyElement | null = document.querySelector('body');

    if(body){
      body.style.overflow = 'auto';
    }
  }
}
