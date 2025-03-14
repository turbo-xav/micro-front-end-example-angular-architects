import {
  Component, CUSTOM_ELEMENTS_SCHEMA, OnDestroy, OnInit
} from '@angular/core';

import { HelloWorldComponent } from './hello-world.component';

if (!customElements.get('hello-world')) {
  customElements.define('hello-world', HelloWorldComponent); // Déclare globalement le Web Component
}

@Component({
  selector: 'web-component-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppComponent implements OnInit,OnDestroy{
  title = 'web-components';

  channel = new BroadcastChannel('my-channel');

  ngOnInit(): void {
    console.log('Remote loaded and listen to events');

    this.channel.onmessage = (message: any) => {
      console.log('Message reçu web component:', message.data);
    };
  }

  ngOnDestroy(): void {
    this.channel.close();
  }
}
