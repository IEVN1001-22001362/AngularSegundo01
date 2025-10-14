export class Operacion {
  a!: number;
  b!: number;
  resultado: number = 0;
  mensaje: string = '';
  signoSum: string='';

calcular(): void {
 this.resultado = 0;
this.mensaje = '';


for (let i = 0; i < this.a; i++) {
  this.resultado += this.b;
  this.mensaje += this.signoSum + this.b;
  this.signoSum = '+';
}

this.mensaje += '=' + this.resultado;
  }
}
