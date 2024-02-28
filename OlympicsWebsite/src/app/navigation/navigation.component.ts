import { Component } from '@angular/core';
import { ThemeComponent } from '../components/theme/theme.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ThemeComponent,CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  menuStatus=false;
  ddayStatus=false;
  eventsStatus=false;

  showMenu(){
    this.menuStatus=!this.menuStatus
  }

  changeMenu(menu:string){
    if(menu=="dday")
    this.ddayStatus=!this.ddayStatus;
    else if(menu="events")
    this.eventsStatus=!this.eventsStatus;
  }
}
