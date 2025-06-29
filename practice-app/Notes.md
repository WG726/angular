# Unit Testing
## Best Practices
You want to test user behavior and public interface
1. Component Logic
    - Ensure methods work as expected
    - Input/output bindings behave correctly
    - State changes under expected conditions
2. Rendered Output That Matters
    - Does important text/content appear?
        - Like error messages, etc.
    - Does the correct DOM show when toggled/triggered?
    - Is a button enabled/disabled under certain conditions?
3. User Interactions
    - Click buttons
    - Fill inputs
    - Simulate events and check results

## General Knowledge
- <u>Jasmine</u>: testing <u>*framework*</u> that supports Behavior-Driven Development. Uses Karma to run tests.
- <u>Karma</u>: default <u>*test runner*</u> for applications created using Angular CLI
    - controls creation of HTML files, opening web browsers, execution of tests and return of test results
- **Spec** files are used for testing
- SpyOn
    - makes sure that the function is called on without actually calling the function
    - "jasmine.createSpyObj(...)" creates a mock of a service
    Note: mock a dependency, not the actual service/thing you are trying to test
- TestBed
    - used to provide dependencies to our services by using Dependency Injection, instead of calling constructors explicitly
- ComponentFixture\<T>
    - test harness that gives access to a component instance and its template
- Skip specific specs or test suite by putting "x" in front of *"describe"* or in front of *"it"*
- Focus on specific test suite or spec put "f" in front of *"describe"* or in front of *"it"*
- Promises also execute before SetTimeout
    - Promise is a *microtask* and SetTimeout is a *task*
- Pipe
    - method used on Observables to compose multiple operators together on the data inside the obserable
    - used to change displayable data
    ```ts
    const obs = of(1,2,3,4,5);

    obs.pipe(
        filter(x => x%2 === 1),  // only odd numbers
        map(x => x*10))          // multiply each by 10
        .subscribe(console.log); //Output: 10, 30, 50
    ```
- Directive
    - class that allows you to add behavior to DOM elements and/or listen and respond to user events
    - used for changing DOM elements/ properties

## Methods
- beforeEach(...)
    - execution block for when code is needed to run before specification
    - basically like constructor for Test Suite
- afterEach(...)
    - execution block for when code is needed to run after specification
    - example can be calling .verify()
- flush()
    - use this to tell Angular to run all pending timers, whether they be setTimeouts or awaiting API calls, etc.
- `<fixture>`.whenStable()
    - waits for all pending asynchonronous tasks to complete like a change that triggered async code
    - example use is when testing routing, you have to wait until the the DOM changes before you expect anything
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
- .verify()
    - verifying that all requests that are called in this test are being handled
    

# Angular CLI Commands
- Run tests: `ng test`
    - this will do hot-reload and will rerun tests after any changes
    - run: `ng test --no-watch` for no hot reload
- Create component without test file: `ng g c <name> --skip-tests`
- Run code coverage report: `ng test --no-watch --code-coverage`
    - this will give you the report of how much of your code has been tested
    - there will be a new coverage folder created
    - usually 70%-80% is the good standard