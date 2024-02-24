import { Component } from '@angular/core';
import { ThemeService } from '../../services/theme.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme',
  standalone: true,
  imports: [CommonModule],
  providers: [ThemeService],
  templateUrl: './theme.component.html',
  styleUrl: './theme.component.css'
})
export class ThemeComponent {

  constructor(private themeService: ThemeService){}
  public onClick(): void{
    
    this.themeService.setDarkTheme();
  }

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public selectedTheme(selectedTheme: string){
    this.isDropdownOpen = false;

    if(selectedTheme === 'light'){
      this.themeService.setLightTheme();
    } else if(selectedTheme === 'dark'){
      this.themeService.setDarkTheme();
    } else if(selectedTheme === 'dday'){
      this.themeService.setDDayTheme();
    } 
  }
}
