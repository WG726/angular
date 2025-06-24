import { TestBed } from "@angular/core/testing";
import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service";

describe("CalcService", () => { // <- description of test group
  
  let shared: SharedService;
  let calc: CalcService;

  beforeEach(() => { // basically like constructor for the Test Suite
    // console.log("Before each is called.");
    // shared = new SharedService(); // <- manually creating instances of services not using dependency injection which is better.
    // calc = new CalcService(shared); // <- manually creating instances of services not using dependency injection which is better.
    shared = jasmine.createSpyObj("SharedService", ["mySharedFunction"]); // <- creating mock service
    TestBed.configureTestingModule({
      // providers: [CalcService, SharedService], // <- using actual instance of "SharedService"
      providers: [CalcService, {
        provide: SharedService, useValue: shared // <- using spy Object instead of actual instance
      }],
    });
    // shared = TestBed.inject(SharedService); // <- using dependency injection to mimic how it works in the code
    calc = TestBed.inject(CalcService); // <- using dependency injection to mimic how it works in the code
  });
  
  it("should multiply two numbers", () => { // <- description of specific test ("spec")
    // const shared = new SharedService(); // dependency (CalcService is dependent on SharedService)
    // const calc = new CalcService(shared);
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });

  it("should add two numbers", () => { // <- description of specific test ("spec")
    // const shared = new SharedService(); // dependency (CalcService is dependent on SharedService)
    // const calc = new CalcService(shared);
    const result = calc.add(3, 5);
    expect(result).toBe(8);
  });

  // it("should call the mySharedFunction func", () => { // making sure that the dependency function is called on
  //   // const shared = new SharedService();
  //   const shared = jasmine.createSpyObj("SharedService", ["mySharedFunction"]); // <- creating mock service
  //   // spyOn(shared, "mySharedFunction"); // <- have to spy before the function is called. 
  //   const calc = new CalcService(shared);
  //   const result = calc.multiply(3, 5); // <- dependency function (mySharedFunction) is not actually being called. If you use spyOn or createSpyObj the function won't be called.
  //   expect(shared.mySharedFunction).toHaveBeenCalled();
  // });
});