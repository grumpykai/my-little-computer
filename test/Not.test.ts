import { Not } from "../src/Not";

describe("Not", () => {
  it("Should return true if input is false", () => {
    const not: Not = new Not();
    not.input = false;
    expect(not.out()).toBe(true);
  });

  it("Should return false if input is true", () => {
    const not: Not = new Not();
    not.input = true;
    expect(not.out()).toBe(false);
  });
});
