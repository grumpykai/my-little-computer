import { NANDGate } from "./NANDGate";

export class Not {
  public input: boolean;
  public nand: NANDGate;

  constructor() {
    this.input = false;
    this.nand = new NANDGate();
  }

  public out(): boolean {
    this.nand.a = this.input;
    this.nand.b = this.input;
    return this.nand.out();
  }
}
