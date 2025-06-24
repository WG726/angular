import { ComponentFixture, fakeAsync, flush, flushMicrotasks, TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { delay, of } from 'rxjs';

describe('AppComponent', () => { // test-suite
  
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;
  let component: AppComponent;
  
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
    }).compileComponents().then(() => { // I can add things here because this code will execute after the Promise is resolved
      fixture = TestBed.createComponent(AppComponent);
      el = fixture.debugElement;
      component = fixture.componentInstance;
    });
  });

  it('should create the app', () => { // test-spec
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'practice-app' title`, () => { // test-spec
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('practice-app');
  });

  // it('should render title', () => { // test-spec
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('h1')?.textContent).toContain('Hello, practice-app');
  // });

  it('should render a button with text subscribe', () => { // test-spec
    component.isSubscribed = false; // have to put this first and call "detectChanges" because no button is shown in the DOM until this property is set (in the scenario where there are 2 buttons)
    fixture.detectChanges();
    const btnElements = el.queryAll(By.css('.subscribe'));
    
    // component.btnText = "Subscribe";
    

    expect(btnElements[0].nativeElement.textContent).toBe("Subscribe");
    expect(btnElements[0].nativeElement.disabled).toBeFalse();
  });

  // it('should render a button with text subscribed and the button should be disabled after clicked', (done: DoneFn) => { // need to use the DoneFn (DoneFunction) here because there are asynchronous things happening. The expects are inside a setTimeout and without the DoneFunction, the test will not be accurate because the tests will not run.
  //   component.isSubscribed = false;
  //   fixture.detectChanges();
  //   let btnElements = el.queryAll(By.css('.subscribe'));
    
  //   // component.btnText = "Subscribe";

  //   btnElements[0].nativeElement.click(); // clicking button in the DOM
    
  //   setTimeout(() => {
  //     console.log("Some other test cases");
  //     done();
  //   }, 8000);
  //   setTimeout(() => {
  //     fixture.detectChanges();

  //     btnElements = el.queryAll(By.css('.subscribe')); // have to call this again because in this scenario we have two different buttons and only one is in the DOM at a time because of the "@if" block. The first btnElements is pointing to the first one but after the click it is still trying to reference that first button so we need to re-point the variable to get the new button that is in the DOM.
  //     expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
  //     expect(btnElements[0].nativeElement.disabled).toBeTrue();
  //     // done();
  //   }, 3000);
  // });

  it('should render a button with text subscribed and the button should be disabled after clicked', fakeAsync(() => { 
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));
    
    // component.btnText = "Subscribe";

    btnElements[0].nativeElement.click(); // clicking button in the DOM
    
    setTimeout(() => {
      console.log("Some other test cases");
    }, 8000);

    setTimeout(() => {
      fixture.detectChanges();
      btnElements = el.queryAll(By.css('.subscribe')); // have to call this again because in this scenario we have two different buttons and only one is in the DOM at a time because of the "@if" block. The first btnElements is pointing to the first one but after the click it is still trying to reference that first button so we need to re-point the variable to get the new button that is in the DOM.
    }, 3000);

    flush(); // use this to tell Angular to run all pending timers, whether they be setTimeouts or awaiting API calls, etc.

    // tick(3000);
    expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
    expect(btnElements[0].nativeElement.disabled).toBeTrue();
    // tick(5000);
  }));

  it('should test the promise', fakeAsync(() => {
    let counter = 0;

    setTimeout(() => {
      counter = counter + 2;
    }, 2000);

    setTimeout(() => {
      counter = counter + 3;
    }, 3000);

    Promise.resolve().then(() => {
      counter = counter + 1;
    });

    // flush(); // execute all asynchronous operations

    flushMicrotasks();
    expect(counter).toBe(1);

    tick(2000);
    expect(counter).toBe(3);

    tick(1000);
    expect(counter).toBe(6);
  }));

  it('should test the observable', fakeAsync(() => {
    let isSubscribed = false;
    let myObs = of(isSubscribed).pipe(delay(1000)); // delay is uses setTimeout
    myObs.subscribe(() => {
      isSubscribed = true;
    });
    tick(1000);
    expect(isSubscribed).toBeTrue();
  }));
});
