import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

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

  it('should render a button with text subscribed and the button should be disabled after clicked', () => { // test-spec
    component.isSubscribed = false;
    fixture.detectChanges();
    let btnElements = el.queryAll(By.css('.subscribe'));
    
    // component.btnText = "Subscribe";

    btnElements[0].nativeElement.click(); // clicking button in the DOM
    fixture.detectChanges();

    btnElements = el.queryAll(By.css('.subscribe')); // have to call this again because in this scenario we have two different buttons and only one is in the DOM at a time because of the "@if" block. The first btnElements is pointing to the first one but after the click it is still trying to reference that first button so we need to re-point the variable to get the new button that is in the DOM.
    expect(btnElements[0].nativeElement.textContent).toBe("Subscribed");
    expect(btnElements[0].nativeElement.disabled).toBeTrue();
  });
});
