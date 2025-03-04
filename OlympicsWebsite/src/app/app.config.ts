import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { routes } from './app.routes';

// Import the provideCloudinaryLoader function
import { provideCloudinaryLoader } from "@angular/common";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom([BrowserAnimationsModule]),provideCloudinaryLoader(`https://res.cloudinary.com/dq9gemegi`)]
};
