import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HoverDirective } from '../../directives/hover.directive';
import { faInstagram, faLinkedin, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Member } from '../../models/member';

@Component({
  selector: 'app-member-widget',
  standalone: true,
  imports: [CommonModule, HoverDirective, FontAwesomeModule],
  templateUrl: './member-widget.component.html',
  styleUrl: './member-widget.component.css'
})
export class MemberWidgetComponent {
  public isHovered: boolean = false;

  @Input() public member: Member = new Member();

  public faFacebookIcon = faFacebook;
  public faInstragramIcon = faInstagram;
  public faLinkedInIcon = faLinkedin;
  public faYouTubeIcon = faYoutube;

  public getFullName(): string{
    return this.member.FirstName + ' ' + this.member.LastName;
  }

  public getPosition(): string{
      if(this.member.Board || this.member.Head){
        return this.member.Position;
      } else {
        return this.buildPosition();
      }
  }

  public getImage(): string{
    return this.member.ImageURL;
  }

  private buildPosition(){
    let departments = this.member.Department;

    let position = this.member.Position + ' ';
    let deps = departments.split(', ');
    let memberDeps = '';
    deps.forEach((dep, index) => {
      if(index < deps.length - 2){
        memberDeps += dep;
        memberDeps +=', '
      } else if(index == deps.length - 2){
        memberDeps += dep;
      }
      else {
        memberDeps += ' & ';
        memberDeps += dep;
      }
    })
    return position += memberDeps;
  }
}
