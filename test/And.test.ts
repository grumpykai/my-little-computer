import { And } from "../src/And";

describe("And", () => {
  it("Should return false if both inputs are false", () => {
    const and = new And(2);

    and.inputs[0] = false;
    and.inputs[1] = false;

    expect(and.out()).toBe(false);
  });

  it("Should return true if both inputs are true", () => {
    const and = new And(2);

    and.inputs[0] = true;
    and.inputs[1] = true;

    expect(and.out()).toBe(true);
  });

  it("Should return false if one input is false", () => {
    const and = new And(2);

    and.inputs[0] = true;
    and.inputs[1] = false;

    expect(and.out()).toBe(false);
  });

  it("Should return false if the other input is false", () => {
    const and = new And(2);

    and.inputs[0] = false;
    and.inputs[1] = true;

    expect(and.out()).toBe(false);
  });

  it("Should return false if one input is true and the other is false", () => {
    const and = new And(8);

    and.inputs[0] = true;
    and.inputs[1] = true;
    and.inputs[2] = true;
    and.inputs[3] = true;
    and.inputs[4] = true;
    and.inputs[5] = true;
    and.inputs[6] = true;
    and.inputs[7] = false;

    expect(and.out()).toBe(false);
  });

  it("Should return true if all inputs are true", () => {
    const and = new And(8);

    and.inputs[0] = true;
    and.inputs[1] = true;
    and.inputs[2] = true;
    and.inputs[3] = true;
    and.inputs[4] = true;
    and.inputs[5] = true;
    and.inputs[6] = true;
    and.inputs[7] = true;

    expect(and.out()).toBe(true);
  });

  it("Should return false if all inputs are false", () => {
    const and = new And(8);

    and.inputs[0] = false;
    and.inputs[1] = false;
    and.inputs[2] = false;
    and.inputs[3] = false;
    and.inputs[4] = false;
    and.inputs[5] = false;
    and.inputs[6] = false;
    and.inputs[7] = false;

    expect(and.out()).toBe(false);
  });

  it("Should return the correct value for each 8-bit permutation", () => {
    const and = new And(8);

    for (let i = 0; i < 256; i++) {
      for (let j = 0; j < 8; j++) {
        and.inputs[j] = i & (1 << j) ? true : false;
      }

      if (i !== 255) {
        expect(and.out()).toBe(false);
      }

      if (i === 255) {
        expect(and.out()).toBe(true);
      }
    }
  });
});
