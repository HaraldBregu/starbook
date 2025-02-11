# StarbookApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.5.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.




TOOLS

ng g c hero-component --flat -t -s --skip-Tests

ng g c dashboard --flat -t -s --skip-tests && ng g m dashboard --routing

-s for inline css, preventing style file creation
--flat to prevent folder creation
-t for inline template, preventing html file creation
--skip-Tests to prevent .spec file creation

ng g c dashboard -s --skip-tests && ng g m dashboard --routing

ng g c main -s --skip-tests && ng g m main --routing

ng g c app -s --skip-tests 

ng g c app -s --skip-tests --flat

ng g c dashboard/home -s --skip-tests