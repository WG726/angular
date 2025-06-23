# Unit Testing
- <u>Jasmine</u>: testing <u>*framework*</u> that supports Behavior-Driven Development. Uses Karma to run tests.
- <u>Karma</u>: default <u>*test runner*</u> for applications created using Angular CLI
    - controls creation of HTML files, opening web browsers, execution of tests and return of test results
- **Spec** files are used for testing
- SpyOn
    - makes sure that the function is called on without actually calling the function
    - "jasmine.createSpyObj(...)" creates a mock of a service
    Note: mock a dependency, not the actual service/thing you are trying to test

# Angular CLI Commands
- Run tests: `ng test`
    - this will do hot-reload and will rerun tests after any changes
    - run: `ng test --no-watch` for no hot reload
- Create component without test file: `ng g c <name> --skip-tests`