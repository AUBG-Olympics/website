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
    root.setProperty('--shadowColor', '#000000');

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
    root.setProperty('--shadowColor', '#000000');

    sessionStorage.removeItem("theme");
    sessionStorage.setItem('theme', 'light');
  }

  public setDDayTheme(){
    const root = document.documentElement.style;

    root.setProperty('--textColor', '#1a1a1a');
    root.setProperty('--backgroundColor', '#fdb927');
    root.setProperty('--primaryColor', '#552583');
    root.setProperty('--secondaryColor', '#686868');
    root.setProperty('--accentColor', '#c7c0eb');
    root.setProperty('--shadowColor', '#552583');

    sessionStorage.removeItem("theme");
    sessionStorage.setItem('theme', 'dday');
  }
}
