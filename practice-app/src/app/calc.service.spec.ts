import { CalcService } from "./calc.service";
import { SharedService } from "./shared.service";

describe("CalcService", () => { // <- description of test group
  // it("should multiply two numbers", () => { // <- description of specific test ("spec")
  //   const shared = new SharedService(); // dependency (CalcService is dependent on SharedService)
  //   const calc = new CalcService(shared);
  //   const result = calc.multiply(3, 5);
  //   expect(result).toBe(15);
  // });

  it("should call the mySharedFunction func", () => { // making sure that the dependency function is called on
    // const shared = new SharedService();
    const shared = jasmine.createSpyObj("SharedService", ["mySharedFunction"]); // <- creating mock service
    // spyOn(shared, "mySharedFunction"); // <- have to spy before the function is called. 
    const calc = new CalcService(shared);
    const result = calc.multiply(3, 5); // <- dependency function (mySharedFunction) is not actually being called. If you use spyOn or createSpyObj the function won't be called.
    expect(shared.mySharedFunction).toHaveBeenCalled();
  });
});