# Angular Homes App
- Install Angular if you don't have it installed

  `npm install -g @angular/cli`

- Clone this branch to your local machine

  `git clone -b homes-app-start git@github.com:angular/codelabs.git homes-app`

- Once the code has been downloaded

  `cd homes-app`

- Install the depencies

  `npm install` 

- Run the application 

  `ng serve`

# Angular CLI Commands
`ng serve` serves up the application locally
`ng generate component <name> --standalone --inline-template` creates a new component of the name <name> "--standalone" will set standalone to be true "--inline-template" will let their be an inline template in the component
`ng g c <name> --standalone --inline-template` same as above
`ng generate interface <interfaceName>` creates an interface with <interfaceName>
`ng g s <name>` creates a service called <name>, "s" stands for service
`json-server --watch db.json` starting up a json server locally for data