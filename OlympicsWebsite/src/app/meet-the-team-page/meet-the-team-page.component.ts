import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ViewEncapsulation } from '@angular/core';
import { NavigationComponent } from '../navigation/navigation.component';
import { SearchWidgetComponent } from '../components/search-widget/search-widget.component';
import { MemberWidgetComponent } from '../components/member-widget/member-widget.component';
import { Member } from '../models/member';
import { olympicsMembers } from '../data/members';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-meet-the-team-page',
  standalone: true,
  imports: [CommonModule, NavigationComponent, SearchWidgetComponent, MemberWidgetComponent],
  templateUrl: './meet-the-team-page.component.html',
  styleUrl: './meet-the-team-page.component.css',
  encapsulation: ViewEncapsulation.None
})

export class MeetTheTeamPageComponent{

  constructor(private themeService: ThemeService){}

  ngOnInit(){
    this.membersOlympics = this.members;
    const themePreference = sessionStorage.getItem('theme');

    if(themePreference === 'dark'){
      this.themeService.setDarkTheme();
    } else if(themePreference === 'light'){
      this.themeService.setLightTheme();
    } else if(themePreference === 'dday'){
      this.themeService.setDDayTheme();
    }
  }

  public title: string = "Olympics Team";

  public onUserFilter(department: string){
    if(department === 'All'){
      this.membersOlympics = this.members;
      this.title = "Olympics Team";
    } else if(department === 'Board'){
      this.membersOlympics = this.members.filter((member) => member.Board == true);
      this.title = "Olympics Board";
    } else if(department === 'Challenge'){
      this.membersOlympics = this.members.filter((member) => member.Department.includes(department));
      let Ilian=this.membersOlympics.splice(1,1);
      this.membersOlympics.splice(0,0,Ilian[0]);
      this.title = "Olympics Challenge Organizers";
    } else if(department === 'Logistics'){
      this.membersOlympics = this.members.filter((member) => member.Department.includes(department));
      this.title = "Olympics Logistics";
    } else if(department === 'Marketing'){
      this.membersOlympics = this.members.filter((member) => member.Department.includes(department));
      this.title = "Olympics Marketing";
    } else if(department === 'Sponsorship'){
      this.membersOlympics = this.members.filter((member) => member.Department.includes(department));
      this.title = "Olympics Sponsorship";
    } else if(department === 'IT'){
      this.membersOlympics = this.members.filter((member) => member.Department.includes(department));
      this.title = "Olympics IT";
    } else if(department === 'PR'){
      this.membersOlympics = this.members.filter((member) => member.Department.includes(department));
      this.title = "Olympics PR";
      let Didi=this.membersOlympics.splice(1,1);
      this.membersOlympics.splice(0,0,Didi[0]);
    } else if(department === 'Video'){
      this.membersOlympics = this.members.filter((member) => member.Department.includes(department));
      this.title = "Olympics Video";
    } else if(department === 'BBQ'){
      this.membersOlympics = this.members.filter((member) => member.Department.includes(department));
      this.title = "Olympics BBQ";
    }
  }


  public members: Member[] = olympicsMembers;
  public membersOlympics: Member[] = [];

}
