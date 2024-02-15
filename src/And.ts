import { NANDGate } from "./NANDGate";
import { Not } from "./Not";

export class And {
  public inputs: boolean[];
  public nands: NANDGate[];
  public nots: Not[];

  constructor(numberOfInputs: number) {
    this.inputs = new Array(numberOfInputs);
    this.nands = new Array(numberOfInputs);
    this.nots = new Array(numberOfInputs);
  }

  public out(): boolean {
    let value = true;

    for (let i = 0; i < this.inputs.length; i++) {
      this.nands[i] = new NANDGate();
      this.nots[i] = new Not();

      this.nands[i].a = value;
      this.nands[i].b = this.inputs[i];

      this.nots[i].input = this.nands[i].out();

      value = this.nots[i].out();
    }

    return value;
  }
}
