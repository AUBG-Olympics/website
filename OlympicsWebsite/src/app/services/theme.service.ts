import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  public setDarkTheme(){
    const root = document.documentElement.style;

    root.setProperty('--textColor', '#0120d1');
    root.setProperty('--backgroundColor', '#ea935d');
    root.setProperty('--primaryColor', '#2289d3');
    root.setProperty('--secondaryColor', '#e8cbb9');
    root.setProperty('--accentColor', '#0b1c45');

    sessionStorage.removeItem("theme");
    sessionStorage.setItem('theme', 'dark');
  }

  public setLightTheme(){
    const root = document.documentElement.style;

    root.setProperty('--textColor', '#fedf2e');
    root.setProperty('--backgroundColor', '#156ca2');
    root.setProperty('--primaryColor', '#dd762c');
    root.setProperty('--secondaryColor', '#173446');
    root.setProperty('--accentColor', '#F4E3BA');

    sessionStorage.removeItem("theme");
    sessionStorage.setItem('theme', 'light');
  }

  public setDDayTheme(){
    const root = document.documentElement.style;

    // root.setProperty('--textColor', '#fedf2e');
    // root.setProperty('--backgroundColor', '#156ca2');
    // root.setProperty('--primaryColor', '#dd762c');
    // root.setProperty('--secondaryColor', '#173446');
    // root.setProperty('--accentColor', '#F4E3BA');

    sessionStorage.removeItem("theme");
    sessionStorage.setItem('theme', 'dday');
  }
}
