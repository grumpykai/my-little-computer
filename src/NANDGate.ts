export class NANDGate {
  public a: boolean;
  public b: boolean;

  constructor() {
    this.a = false;
    this.b = false;
  }

  public out(): boolean {
    return !(this.a && this.b);
  }
}
