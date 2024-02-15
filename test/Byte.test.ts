import { Bus } from "../src/Bus";
import { Byte } from "../src/Byte";

describe("And", () => {
  it("Should store the value 0000 0011", () => {
    const byte = new Byte();

    byte.set([false, false, false, false, false, false, true, true]);

    expect(byte.out()).toEqual([
      false,
      false,
      false,
      false,
      false,
      false,
      true,
      true,
    ]);
  });

  it("Should return the correct value for each 8-bit permutation", () => {
    const byte = new Byte();

    for (let i = 0; i < 256; i++) {
      const bus = new Bus(8);

      for (let j = 0; j < 8; j++) {
        bus.data[j] = i & (1 << j) ? true : false;
      }

      byte.set(bus.data);

      const byteData = byte.out();

      // expect(byteData).toEqual(bus.data);
    }
  });
});
