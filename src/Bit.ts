import { NANDGate } from "./NANDGate";

export class Bit {
  // public setInput(input: boolean): void {}

  out = false;

  gate1: NANDGate = new NANDGate();
  gate2: NANDGate = new NANDGate();
  gate3: NANDGate = new NANDGate();
  gate4: NANDGate = new NANDGate();

  public change(input: boolean, set: boolean): void {
    this.gate1.a = input;
    this.gate1.b = set;

    this.gate2.a = this.gate1.out();
    this.gate2.b = set;

    this.gate3.a = this.gate1.out();
    this.gate3.b = this.gate4.out();

    this.gate4.a = this.gate3.out();
    this.gate4.b = this.gate2.out();

    this.gate3.b = this.gate4.out(); // 4 is input to 3

    this.out = this.gate3.out();
  }
}
