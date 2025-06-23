import { CalcService } from "./calc.service";

describe("CalcService", () => { // <- description of test group
  it("should multiply two numbers", () => { // <- description of specific test ("spec")
    const calc = new CalcService();
    const result = calc.multiply(3, 5);
    expect(result).toBe(15);
  });
});