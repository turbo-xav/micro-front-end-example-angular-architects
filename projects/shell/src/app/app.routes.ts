import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'flights',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((c) => c.AppComponent),
  },
  {
    path: 'flights1',
    loadComponent: () =>
      loadRemoteModule('mfe1', './RemoteComponent').then((c) => c.RemoteComponent),
  },
];
