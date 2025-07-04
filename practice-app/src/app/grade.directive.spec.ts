import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { GradeDirective } from './grade.directive';
import { AppComponent } from './app.component';
import { DebugElement } from '@angular/core';
import { GradePipe } from './grade.pipe';
import { By } from '@angular/platform-browser';

describe('GradeDirective', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [AppComponent, GradePipe]
    })

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  }));

  it('should create an instance', () => {
    let mockElRef = {
      nativeElement: document.createElement('div'),
    }
    let mockRenderer2 = jasmine.createSpyObj('Renderer2', ['setStyle']);
    const directive = new GradeDirective(mockElRef, mockRenderer2);
    expect(directive).toBeTruthy();
  });

  it('should change the text color on mouse over', () => {
    let divs = el.queryAll(By.css('div'));
    let div0 = divs[0];
    let div1 = divs[1];
    let div2 = divs[2];
    let div3 = divs[3];
    let div4 = divs[4];

    div0.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div0.nativeElement.style.color).toBe('green');

    div1.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div1.nativeElement.style.color).toBe('blue');

    div2.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div2.nativeElement.style.color).toBe('blue');

    div3.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div3.nativeElement.style.color).toBe('red');

    div4.triggerEventHandler('mouseenter', {});
    fixture.detectChanges();
    expect(div4.nativeElement.style.color).toBe('blue');
  });

  it('should change the text color to black on mouse leave', () => {
    let divs = el.queryAll(By.css('div'));
    let div0 = divs[0];
    let div1 = divs[1];
    let div2 = divs[2];
    let div3 = divs[3];
    let div4 = divs[4];

    div0.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div0.nativeElement.style.color).toBe('black');

    div1.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div1.nativeElement.style.color).toBe('black');

    div2.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div2.nativeElement.style.color).toBe('black');

    div3.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div3.nativeElement.style.color).toBe('black');

    div4.triggerEventHandler('mouseleave', {});
    fixture.detectChanges();
    expect(div4.nativeElement.style.color).toBe('black');
  });
});
