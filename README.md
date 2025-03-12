# Exemple d'utilisation de "@angular-architects  
 
## Libs utilisées :
 - @angular-architects/native-federation
 - @angular-architects/module-federation

## Lancer le projet :
```bash
 npm ci
 npm start 
```
- Browse 
  - http://localhost:4200 for the Shell
  - http://localhost:4201 for the Mfe1
  - http://localhost:4202 for the Web component


## Quelques étapes clef pour utiliser le plugin : 

### Installation du plugin 
```bash
npm i @angular-architects/native-federation -D
```  
### Génération de shell & remote
```bash
ng g application mfe1
ng g application shell
ng g application web-components
```

### Exécution du plugin pour préconfigurer shell & remote
```bash
ng g @angular-architects/native-federation:init --project mfe1 --port 4201 --type remote
ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
ng g @angular-architects/native-federation:init --project web-components --port 4202 --type remote
```

### Exposer les components

Exemple pour mfe1 où j'expose 2 components
```(typescript)
module.exports = withNativeFederation({

  name: 'mfe1',

  exposes: {
    './Component': './projects/mfe1/src/app/app.component.ts',
    './RemoteComponent': './projects/mfe1/src/app/remote/remote.component.ts',
  },
```

### Décrire les exposition

- Dans le shell **federation.manifest.json**
```(javascript)
{
	"mfe1": "http://localhost:4201/remoteEntry.json",
	"web-components": "http://localhost:4202/remoteEntry.json"
}
```

### Configurer la route

Dans le shell

```(typescript)
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
```

## Documents et liens utiles:
 - [GitHub Angular Architect](https://github.com/angular-architects/module-federation-plugin/blob/main/libs/native-federation/README.md#error-file-srcmaints-is-missing-from-the-typescript-compilation-plugin-angular-compiler)
 - [Angulararchitects.io exemple](https://www.angulararchitects.io/en/blog/the-microfrontend-revolution-part-2-module-federation-with-angular)
 - [Micro front end communication](https://dev.to/akdevcraft/ways-to-communicate-between-micro-frontends-51ol)
 - [Event Bus](https://oskari.io/blog/event-bus-micro-frontend)
