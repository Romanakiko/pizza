import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {MockDataInterceptor} from './mock-data/mock-data-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
        provideHttpClient(
          withInterceptors([MockDataInterceptor])
        )
  ]
};
