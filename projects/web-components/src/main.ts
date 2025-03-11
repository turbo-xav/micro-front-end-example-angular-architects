import { initFederation } from '@angular-architects/native-federation';

import { HelloWorldComponent } from './app/hello-world.component';

if (!customElements.get('hello-world')) {
  customElements.define('hello-world', HelloWorldComponent); // Déclare globalement le Web Component
}


initFederation()
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
