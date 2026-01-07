import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { provideStore } from '@ngrx/store';
import { appReducers } from './store/app.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { withInMemoryScrolling } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',  // siempre arriba
        anchorScrolling: 'enabled',        // opcional, para hash links
      })
    ),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideClientHydration(withEventReplay()),
    provideStore(appReducers),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: false,
    }),
    provideCharts(withDefaultRegisterables()),
  ],
};
