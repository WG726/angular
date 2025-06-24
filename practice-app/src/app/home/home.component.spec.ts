import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let el: DebugElement; 

  beforeEach(async () => { // need to be asyn because when configuring the module, we have to wait for the ".compileComponents()" to finish before running any tests
    await TestBed.configureTestingModule({
      imports: [HomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    el = fixture.debugElement; // associated with root element of component
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct contents', () => {
    let pElements = el.queryAll(By.css('p'));                               // array of all p tags
    expect(pElements[0].nativeElement.textContent).toBe('home works!');

    let buttonElements = el.queryAll(By.css('.btn'));
    expect(buttonElements[0].nativeElement.disabled).toBeTrue();

    let imgElements = el.queryAll(By.css('img'));
    expect(imgElements[0].nativeElement.src).toBe('http://imgsrc.com/123');

    component.title = "Welcome to Angular Testing";
    fixture.detectChanges();                                                // need to add this line because there was a new change we made above
    let textElements = el.queryAll(By.css('.title'));
    expect(textElements[0].nativeElement.textContent).toBe('Welcome to Angular Testing');
  });
});
