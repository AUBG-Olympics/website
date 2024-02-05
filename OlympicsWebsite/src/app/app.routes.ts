import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SponsorsPageComponent } from './sponsors-page/sponsors-page.component';

export const routes: Routes = [
    {path:'',component:LandingPageComponent},
    {path:'sponsors',component:SponsorsPageComponent},
];
