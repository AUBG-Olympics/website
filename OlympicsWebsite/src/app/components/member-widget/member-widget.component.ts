import { CommonModule, IMAGE_LOADER, NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HoverDirective } from '../../directives/hover.directive';
import { faInstagram, faLinkedin, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Member } from '../../models/member';

export function customCloudinaryLoader(): any {
  return (urlObj: any) => {
    // Modify the URL to remove or adjust the automatic transformations
    // For example, removing the redundant part
    let url = urlObj.src;
    const baseUrl = 'https://res.cloudinary.com/dq9gemegi/image/upload/';
    const transformationSegment = '/f_auto,q_auto,w_1920/';
    if (url.includes(transformationSegment)) {
      url = url.replace(transformationSegment, '/');
    }
    // Ensure the base URL is correctly included
    if (!url.startsWith(baseUrl)) {
      url = baseUrl + url;
    }
    return url;
  };
}

@Component({
  selector: 'app-member-widget',
  standalone: true,
  imports: [CommonModule, HoverDirective, FontAwesomeModule, NgOptimizedImage],
  templateUrl: './member-widget.component.html',
  styleUrl: './member-widget.component.css',
  providers: [{
    provide: IMAGE_LOADER,
    useFactory: customCloudinaryLoader,
    deps: [],
  },]
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
    if(deps.length > 1){
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
    } else {
      position += deps[0]
    }
    return position += memberDeps;
  }
}
