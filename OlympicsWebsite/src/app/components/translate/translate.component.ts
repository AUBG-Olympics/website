import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-translate',
  standalone: true,
  imports: [],
  templateUrl: './translate.component.html',
  styleUrl: './translate.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class TranslateComponent {
  dropdownOpen = false;

  constructor() { }

  toggleDropdown(): void {
    this.dropdownOpen = !this.dropdownOpen;
  }

  changeLanguage(lang: string): void {
    this.dropdownOpen = false;
    console.log(`Language changed to: ${lang}`);
    // Implement language change logic here
  }
}
