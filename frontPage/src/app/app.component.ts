import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'frontPage';
  ngOnInit():void{
    setInterval(()=>{this.getDays();this.getHours()},1000)
  }

  getDays(){
    let endDate=new Date('January 25, 2024 00:00:00').getTime();
    let now=new Date().getTime();
    let remaining=endDate-now;
    return Math.floor(remaining/ (1000 * 3600 * 24));
  }

  getHours(){
    let endDate=new Date('January 25, 2024 00:00:00').getTime();
    let now=new Date().getTime();
    let remaining=endDate-now;
    return Math.round(remaining% (1000 * 3600 * 24)/(1000 * 3600 ));
  }

  getMinutes(){
    let endDate=new Date('January 25, 2024 00:00:00').getTime();
    let now=new Date().getTime();
    let remaining=endDate-now;
    return Math.round(remaining% (1000 * 3600)/(1000 * 60 ));
  }
  getSeconds(){
    let endDate=new Date('January 25, 2024 00:00:00').getTime();
    let now=new Date().getTime();
    let remaining=endDate-now;
    return Math.round(remaining% (1000 * 60)/(1000));
  }
}
