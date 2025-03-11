# Exemple d'utilisation de "@angular-architects  
 
## Libs utilisées :
 - @angular-architects/native-federation
 - @angular-architects/module-federation

## Lancer le projet :
 - npm ci
 - npm start
 - Browse http://localhost:4200


## Quelques étapes clef pour utiliser le plugin : 
1 - Installation du plugin 
- npm i @angular-architects/native-federation -D  
2 - Génération de shell & remote
- ng g application mfe1
- ng g application shell

3 - Exécution du plugin pour préconfigurer shell & remote
- ng g @angular-architects/native-federation:init --project mfe1 --port 4201 --type remote
- ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host

4 - Configurer la route

Dans le shell

```(js)
export const routes: Routes = [
  {
    path: 'flights',
    loadComponent: () =>
      loadRemoteModule('mfe1', './Component').then((m) => m.AppComponent),
  },
];
```

## Docs utiles:
 - https://github.com/angular-architects/module-federation-plugin/blob/main/libs/native-federation/README.md#error-file-srcmaints-is-missing-from-the-typescript-compilation-plugin-angular-compiler
 - https://www.angulararchitects.io/en/blog/the-microfrontend-revolution-part-2-module-federation-with-angular/
 - 
