import {Component, CUSTOM_ELEMENTS_SCHEMA, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';
import { DynamicIoDirective, DynamicComponent} from 'ng-dynamic-component';
import {FirstDynamicComponent} from './first-dynamic/first-dynamic.component';
import {SecondDynamicComponent} from './second-dynamic/second-dynamic.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DynamicIoDirective, DynamicComponent  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent implements OnInit{
  title = 'shell';

  inputs = {
    name: 'transmitted value'
  }

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  currentComponent: any = null;
  mfeEurrentComponent: any = null;

  // Mapping des composants dynamiques
  private readonly components = {
    first: FirstDynamicComponent,
    second: SecondDynamicComponent,
  };

  // Méthode pour changer de composant
  changeComponent(type: 'first' | 'second') {
    this.currentComponent = this.components[type];
  }


  publishEvent(): void {
    console.warn('Publishing event...')
    const channel = new BroadcastChannel('my-channel'); // Nom du canal
    channel.postMessage({ event: 'newEvent', message: 'This is a super event' });
  }

  doSomething(event: any): void {
    console.warn('Publishing event...',event)
  }

  async ngOnInit() {
    setInterval(() => this.publishEvent(), 2000);

    loadRemoteModule({
      remoteName: 'web-components', // Nom du remote (doit correspondre à la configuration Webpack)
      exposedModule: './HelloWorldComponent' // Chemin du module exposé (correspond à la clé dans `exposes`)
    })
      .then((module) => {
        /*console.log('Remote Web Component chargé depuis le remote');
        // Exécutez ici l’enregistrement nécessaire, par exemple customElements.define
        const HelloWorldComponent = module.HelloWorldComponent;
        if (!customElements.get('hello-world')) {
          customElements.define('hello-world', HelloWorldComponent);
        }*/
      })
      .catch((err) => console.error('Erreur lors du chargement du Remote Web Component', err));




    const module = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js', // URL du remote
      exposedModule: './RemoteComponent', // Nom configuré dans le webpack.config.js
    });

    // Instancie dynamiquement le composant dans le conteneur
    const componentRef = this.container.createComponent(module.RemoteComponent);
    const component = componentRef.instance;
    (componentRef.instance as any)['remoteInput'] = 'Loaded by loadRemoteModule';
    this.mfeEurrentComponent = module.RemoteComponent;

  }

}
