Etapes : 
1 - Installation du plugin 
- npm i @angular-architects/native-federation -D  
2 - Génération de shell & remote
- ng g application mfe1
- ng g application shell

3 - Exécution du plugin pour préconfigurer shell & remote
- ng g @angular-architects/native-federation:init --project mfe1 --port 4201 --type remote
- ng g @angular-architects/native-federation:init --project shell --port 4200 --type dynamic-host
