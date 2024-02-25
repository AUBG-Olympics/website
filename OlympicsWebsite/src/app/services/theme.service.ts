import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  public setDarkTheme(){
    const root = document.documentElement.style;

    root.setProperty('--textColor', '#F5c033');
    root.setProperty('--backgroundColor', '#dd762c');
    root.setProperty('--primaryColor', ' #07567F');
    root.setProperty('--secondaryColor', '#173446');
    root.setProperty('--accentColor', '#F4E3BA');

    sessionStorage.removeItem("theme");
    sessionStorage.setItem('theme', 'dark');
  }

  public setLightTheme(){
    const root = document.documentElement.style;

    root.setProperty('--textColor', '#F5c033');
    root.setProperty('--backgroundColor', '#07567F');
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
