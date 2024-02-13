import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { WhoAreWePageComponent } from './who-are-we-page/who-are-we-page.component';
import { SportWidgetComponent } from './components/sport-widget/sport-widget.component';
import { SportsPageComponent } from './sports-page/sports-page.component';

export const routes: Routes = [
    {path:'',component:LandingPageComponent},
    {path:'sponsors',component:SponsorsPageComponent},
    {path:'events/:event',component:EventsPageComponent},
    {path:'who-are-we',component:WhoAreWePageComponent},
    {path: 'dday/sports', component: SportsPageComponent}
];
