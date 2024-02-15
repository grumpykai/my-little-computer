import { NANDGate } from "../src/NANDGate";

describe("NANDGate", () => {
  it("should return true if both inputs are false", () => {
    const nand = new NANDGate();
    nand.a = false;
    nand.b = false;
    expect(nand.out()).toBe(true);
  });

  it("should return true if one input is true", () => {
    const nand = new NANDGate();
    nand.a = false;
    nand.b = true;
    expect(nand.out()).toBe(true);
  });

  it("should return true if the other input is true", () => {
    const nand = new NANDGate();
    nand.a = true;
    nand.b = false;
    expect(nand.out()).toBe(true);
  });

  it("should return false if both inputs are true", () => {
    const nand = new NANDGate();
    nand.a = true;
    nand.b = true;
    expect(nand.out()).toBe(false);
  });
});
