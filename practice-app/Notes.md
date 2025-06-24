# Unit Testing
- <u>Jasmine</u>: testing <u>*framework*</u> that supports Behavior-Driven Development. Uses Karma to run tests.
- <u>Karma</u>: default <u>*test runner*</u> for applications created using Angular CLI
    - controls creation of HTML files, opening web browsers, execution of tests and return of test results
- **Spec** files are used for testing
- SpyOn
    - makes sure that the function is called on without actually calling the function
    - "jasmine.createSpyObj(...)" creates a mock of a service
    Note: mock a dependency, not the actual service/thing you are trying to test
- beforeEach(...)
    - execution block for when code is needed to run before specification
    - basically like constructor for Test Suite
- TestBed
    - used to provide dependencies to our services by using Dependency Injection, instead of calling constructors explicitly
- Skip specific specs or test suite by putting "x" in front of *"describe"* or in front of *"it"*
- Focus on specific test suite or spec put "f" in front of *"describe"* or in front of *"it"*
- .subscribe()
    - method used to listen and react to values usually like a stream of data
    - lets you handle data when it arrives and optionally handle errors and completion
    - to me, looks like a ".then()" in JavaScript promise
- .toBeTruthy()
    - anything that can be evaluated to be true in Boolean context
    - example use is to make sure something (data) is there/exists
- .toBeTrue()
    - only for value of *"true"*
- .toBe()
    - strict equality (===): checks value
    - best for primitives and same object instances
- .toEqual()
    - Deep equality (recursive): checks contents of thing
    - best for Object/arry structure comparison
    

# Angular CLI Commands
- Run tests: `ng test`
    - this will do hot-reload and will rerun tests after any changes
    - run: `ng test --no-watch` for no hot reload
- Create component without test file: `ng g c <name> --skip-tests`