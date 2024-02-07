import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';
import { EventsPageComponent } from './events-page/events-page.component';
import { WhoAreWePageComponent } from './who-are-we-page/who-are-we-page.component';

export const routes: Routes = [
    {path:'',component:LandingPageComponent},
    {path:'sponsors',component:SponsorsPageComponent},
    {path:'events/:event',component:EventsPageComponent},
    {path:'whoarewe',component:WhoAreWePageComponent}
];
