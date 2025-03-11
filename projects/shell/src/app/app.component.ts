import {Component, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {loadRemoteModule} from '@angular-architects/native-federation';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'shell';

  @ViewChild('container', { read: ViewContainerRef, static: true })
  container!: ViewContainerRef;

  async ngOnInit() {
    const module = await loadRemoteModule({
      remoteEntry: 'http://localhost:4201/remoteEntry.js', // URL du remote
      exposedModule: './RemoteComponent', // Nom configuré dans le webpack.config.js
    });

    // Instancie dynamiquement le composant dans le conteneur
    const componentRef = this.container.createComponent(module.RemoteComponent);
    (componentRef.instance as any)['remoteInput'] = 'Angular';
  }

}
