export class Distancia {
  
  x1!: number;
  y1!: number;
  x2!: number;
  y2!: number;
  resultado!: number;

  // Método para calcular la distancia entre los puntos
  calcularDistancia(): void {
     const dist = ((this.x2 - this.x1) ** 2) + ((this.y2 - this.y1) ** 2);
    const distanciaTot = Math.sqrt(dist);
    this.resultado= distanciaTot;
   
  }
}