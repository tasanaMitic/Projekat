export class Presedanje {
  id: number;
  grad: string;
  drzava: string;
  //idLeta: number;

  constructor(grad: string, drzava: string) {
    this.grad = grad;
    this.drzava = drzava;
  }
}
