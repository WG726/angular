# Unit Testing
- Jasmine: testing framework that supports Behavior-Driven Development. Uses Karma to run tests.
- Karma: default test runner for applications created using Angular CLI
    - controls creation of HTML files, opening web browsers, execution of tests and return of test results
- **Spec** files are used for testing

# Angular CLI Commands
- Run tests: `ng test`
    - this will do hot-reload and will rerun tests after any changes
    - run: `ng test --no-watch` for no hot reload
- Create component without test file: `ng g c <name> --skip-tests`