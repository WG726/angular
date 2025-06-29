import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { provideRouter, Router } from "@angular/router";
import { provideLocationMocks } from "@angular/common/testing";
import { Location } from "@angular/common";
import { routes } from "./app.routes";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { InfoComponent } from "./info/info.component";
import { GradePipe } from "./grade.pipe";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";

describe("App Routing", () => {
    let router: Router;
    let appFixture: ComponentFixture<AppComponent>;
    let homeFixture: ComponentFixture<HomeComponent>;
    let infoFixture: ComponentFixture<InfoComponent>;
    let location: Location;
    let elHomeFixture: DebugElement;
    let elInfoFixture: DebugElement;

    beforeEach(waitForAsync(() => {
        TestBed.configureTestingModule({
            providers: [
                provideRouter(routes),
                provideLocationMocks(),
            ],
            imports: [AppComponent, HomeComponent, InfoComponent, GradePipe]
        }).compileComponents();
    }));

    beforeEach(() => {
        router = TestBed.inject(Router);
        location = TestBed.inject(Location);
        router.initialNavigation();
        appFixture = TestBed.createComponent(AppComponent);
        homeFixture = TestBed.createComponent(HomeComponent);
        infoFixture = TestBed.createComponent(InfoComponent);
        elHomeFixture = homeFixture.debugElement;
        elInfoFixture = infoFixture.debugElement;
    });

    it('should navigate to the default path = home', waitForAsync(() => {
        appFixture.detectChanges();
        appFixture.whenStable().then(() => {
            expect(location.path()).toBe("/home");
        });
    }));

    it('should navigate to info on clicking the link in home component', waitForAsync(() => {
        homeFixture.detectChanges();
        let links = elHomeFixture.queryAll(By.css('a'));
        links[0].nativeElement.click();
        homeFixture.whenStable().then(() => {
            expect(location.path()).toBe('/info');
        });
    }));

    it('should navigate to home on clicking the button in info component', waitForAsync(() => {
        infoFixture.detectChanges();
        let btns = elInfoFixture.queryAll(By.css('.back'));
        btns[0].nativeElement.click();
        infoFixture.whenStable().then(() => {
            expect(location.path()).toBe('/home');
        });
    }));
    
});