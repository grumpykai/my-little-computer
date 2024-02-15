import { Bit } from "./Bit";

export class Byte {
  public readonly numberOfBits: number = 8;
  public data: Bit[] = new Array(this.numberOfBits);

  constructor() {
    for (let i = 0; i < this.numberOfBits; i++) {
      this.data[i] = new Bit();
    }
  }

  public set(dataToSet: boolean[]): void {
    for (let i = 0; i < this.numberOfBits; i++) {
      this.data[i].change(dataToSet[i], true);
    }
  }
  public out(): boolean[] {
    const out: boolean[] = new Array(this.numberOfBits);
    for (let i = 0; i < this.numberOfBits; i++) {
      out[i] = this.data[i].out;
    }
    return out;
  }
}
