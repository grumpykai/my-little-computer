export class Bus {
  public data: boolean[];

  public readonly numberOfBits: number;

  constructor(numberOfBits: number) {
    this.data = new Array(numberOfBits).fill(false);
    this.numberOfBits = numberOfBits;
  }
}
