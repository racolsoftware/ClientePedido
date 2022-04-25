export class Diccionario {
  dicc = new Object();

  constructor() {
    this.dicc = new Object();
    // this.dicc = [];
  }

  add(clave: string, valor: any): void {
      this.dicc[clave.toString().trim()] = valor;

  }

  remove(clave: string): void {
      this.dicc[clave.toString().trim()] = undefined;
      delete this.dicc[clave.toString().trim()];
      // console.log(this.dicc);
  }

  get(clave: string): any {
      if (this.ContainsKey(clave.toString().trim())) {
          return this.dicc[clave.toString().trim()];
      }
  }

  set(clave: string, valor: any): any {
      if (this.ContainsKey(clave.toString().trim())) {
          this.dicc[clave.toString().trim()] = valor;
      }
  }

  // eslint-disable-next-line @typescript-eslint/naming-convention
  ContainsKey(clave: string): boolean {

      if (this.dicc[clave.toString().trim()] === undefined) {
          return false;
      } else {
          return true;
      }
  }

  keys(): Array<string> {
    // eslint-disable-next-line prefer-const
    let valores: Array<string> = Object.keys(this.dicc);
    return valores;
  }

  length(): number {
    // console.log(this.dicc);
    // eslint-disable-next-line prefer-const
    let valores: Array<string> = Object.keys(this.dicc);
    return valores.length;
  }
}
