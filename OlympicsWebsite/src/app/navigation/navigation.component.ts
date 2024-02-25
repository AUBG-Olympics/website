import { Component } from '@angular/core';
import { ThemeComponent } from '../components/theme/theme.component';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [ThemeComponent],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {

}
