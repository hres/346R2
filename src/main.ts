import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import {KeycloakService} from "./app/keycloak/keycloak.service";

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

KeycloakService.init()
   .then(() => platformBrowserDynamic().bootstrapModule(AppModule))
   .catch(e => window.location.reload());

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
