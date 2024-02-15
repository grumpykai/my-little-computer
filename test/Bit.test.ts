import { Bit } from "../src/Bit";

describe("Bit", () => {
  it("Should initially be false", () => {
    const bit = new Bit();

    expect(bit.out).toBe(false);
  });

  it("Should change state when set to different values", () => {
    const bit = new Bit();

    // Set to false
    bit.change(false, true);
    expect(bit.out).toBe(false);

    // Set to true
    bit.change(true, true);
    expect(bit.out).toBe(true);

    // Set to false
    bit.change(false, true);
    expect(bit.out).toBe(false);

    // Set to true
    bit.change(true, true);
    expect(bit.out).toBe(true);

    // Set to false
    bit.change(false, true);
    expect(bit.out).toBe(false);
  });

  it("Should change state when set to the same value", () => {
    const bit = new Bit();

    // Set to false
    bit.change(false, true);
    expect(bit.out).toBe(false);

    // Set to true
    bit.change(true, true);
    expect(bit.out).toBe(true);

    // Set to true
    bit.change(true, true);
    expect(bit.out).toBe(true);

    // Set to false
    bit.change(false, true);
    expect(bit.out).toBe(false);

    // Set to false
    bit.change(false, true);
    expect(bit.out).toBe(false);

    // Set to true
    bit.change(true, true);
    expect(bit.out).toBe(true);

    // Set to false
    bit.change(false, true);
    expect(bit.out).toBe(false);

    // Set to true
    bit.change(true, true);
    expect(bit.out).toBe(true);

    // Set to true
    bit.change(true, true);
    expect(bit.out).toBe(true);
  });

  it("Should not change state from false when set is false", () => {
    const bit = new Bit();

    bit.change(false, false);
    expect(bit.out).toBe(false);

    bit.change(true, false);
    expect(bit.out).toBe(false);

    bit.change(true, false);
    expect(bit.out).toBe(false);
  });

  it("Should not change state from true when set is false", () => {
    const bit = new Bit();

    bit.change(true, true);
    expect(bit.out).toBe(true);

    bit.change(false, false);
    expect(bit.out).toBe(true);

    bit.change(true, false);
    expect(bit.out).toBe(true);

    bit.change(true, false);
    expect(bit.out).toBe(true);
  });
});
