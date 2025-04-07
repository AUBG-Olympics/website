import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor() { }

  public setDarkTheme(){
    const root = document.documentElement.style;

    root.setProperty('--textColor', ' #F5c033');
    root.setProperty('--backgroundColor', ' #dd762c');
    root.setProperty('--primaryColor', ' #07567F');
    root.setProperty('--secondaryColor', ' #173446');
    root.setProperty('--accentColor', ' #F4E3BA');
    root.setProperty('--shadowColor', ' #000000');
    root.setProperty('--meetTheTeamColor','#07567F');

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
    root.setProperty('--meetTheTeamColor','#F5c033');
   

    sessionStorage.removeItem("theme");
    sessionStorage.setItem('theme', 'light');
  }

  public setDDayTheme(){
    const root = document.documentElement.style;

    root.setProperty('--textColor', 'rgb(18, 159, 175)');
    root.setProperty('--backgroundColor', ' #94D7CD');
    root.setProperty('--primaryColor', ' #005F6A');
    root.setProperty('--secondaryColor', ' #686868');
    root.setProperty('--accentColor', '#94D7CD');
    root.setProperty('--shadowColor', ' #1a1a1a');
    root.setProperty('--meetTheTeamColor',' #005F6A');

    sessionStorage.removeItem("theme");
    sessionStorage.setItem('theme', 'dday');
  }
}
