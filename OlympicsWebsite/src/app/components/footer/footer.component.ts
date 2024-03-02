import { Component, ViewEncapsulation } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram, faLinkedin, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent {
  public faFacebookIcon = faFacebook;
  public faInstragramIcon = faInstagram;
  public faLinkedInIcon = faLinkedin;
  public faYouTubeIcon = faYoutube;

  public currentYear = new Date().getFullYear();
}
