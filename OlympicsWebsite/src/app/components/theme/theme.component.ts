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

  constructor(private themeService: ThemeService){
    const selectedTheme = sessionStorage.getItem('theme');

    if(selectedTheme){
      if(selectedTheme === "light"){
        this.selectedTraditional = true;
        this.selectedReversed = false;
        this.selectedDDay = false;
      } else if(selectedTheme === 'dark'){
        this.selectedTraditional = false;
        this.selectedReversed = true;
        this.selectedDDay = false;
      } else if(selectedTheme === 'dday'){
        this.selectedTraditional = false;
        this.selectedReversed = false;
        this.selectedDDay = true;
      }
    }
  }

  public selectedTraditional: boolean = true;
  public selectedReversed: boolean = false;
  public selectedDDay: boolean = false;

  isDropdownOpen = false;

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  public selectedTheme(element: any, selectedTheme: string){
    this.isDropdownOpen = false;
    this.selectedTraditional = false;
    this.selectedReversed = false;
    this.selectedDDay = false;

    let target = element.target.textContent;

    if(target === "Traditional"){
      this.selectedTraditional = true;
    } else if(target === "Reversed"){
      this.selectedReversed = true;
    } else if(target === "D-Day"){
      this.selectedDDay = true;
    }

    if(selectedTheme === 'light'){
      this.themeService.setLightTheme();
    } else if(selectedTheme === 'dark'){
      this.themeService.setDarkTheme();
    } else if(selectedTheme === 'dday'){
      this.themeService.setDDayTheme();
    } 
  }
}
