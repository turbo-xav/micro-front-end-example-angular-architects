import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'mfe1',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((c) => c.AppComponent),
  },
  {
    path: 'remote',
    loadComponent: () =>
      loadRemoteModule('mfe1', './RemoteComponent').then((c) => c.RemoteComponent),
  },
  {
    path: 'web-components',
    loadComponent: () =>
      loadRemoteModule('web-components', './Component').then((c) => c.AppComponent),
  },
];
