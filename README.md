# FemProductionAngular
### Global installation
- Node.js & NPM recommend NVM for package management
- Angular-Cli via npm i -g angular/cli
- npm install -g nx
### Create an nx workspace
-npx create-nx-workspace@10.3.2 fem-production-angular --appName=dashboard --preset=angular-nest --npmScope=fem --linter=tslint --style=scss --nx-cloud=false.
### Commands need if you want to test your knowledge.
- concurrently for parallel programming two projects
### Add Material lib
- Add nx add @angular/material@10.2.7 --defaults=true --interactive=false && nx add @ngrx/store@10.0.1 --defaults=true --interactive=false.
### Communication with the server
- nx g lib core-data --parent-module=apps/dashboard/src/app/app.module.ts --routing --style=scss
### Managing the state of the application
- nx g lib core-state --parent-module=apps/dashboard/src/app/app.module.ts --routing --style=scss && \ nx g lib material --parent-module=apps/dashboard/src/app/app.module.ts --routing --style=scss -d dryRun
### Generate Service components.
- nx g s services/widget/widgets --project=core-data
### Generate Routing module.
- nx g m routing --flat=true -m=app.module.ts 
### Generate widget components.
- nx g c widgets -m app.module.ts --style=scss && nx g c widgets/widgets-list -m app.module.ts --style=scss && nx g c widgets/widget-details -m app.modules.ts --style=scss.
### Generate home components.
- nx g c home -m app.module.ts --style==scss




