export class Zodiaco {
  nombre!: string;
  apellidoP!: string;
  apellidoM!: string;
  dia!: number;
  mes!: number;
  anio!: number;
  sexo!: string;

  nombreCompleto!: string;
  edad!: number;
  signo!: string;
  imagenSigno!: string;



  calcularZodiaco(): void {
    // Concatenar nombre
    this.nombreCompleto = `${this.nombre} ${this.apellidoP} ${this.apellidoM}`;

    
    const hoy = new Date();
    let edad = hoy.getFullYear() - this.anio;
   
    this.edad = edad;
      //primero tomo el mes actual y lo comparo con el mes que ingresan
    if(hoy.getMonth() + 1 < this.mes){
      if(hoy.getMonth() + 1 === this.mes && hoy.getDate() < this.dia){
         edad--;

      }
    }
    this.edad = edad;


    // Calcular índice basado en 1900
    const indice = (this.anio - 1900) % 12;
    

     if (indice === 0) {
      this.signo = 'Rata';
      this.imagenSigno = 'https://i.pinimg.com/originals/26/28/92/262892142752a51cf8e1e9dbd64d79bd.jpg';
    } 
    else if (indice === 1) {
      this.signo = 'Buey';
      this.imagenSigno = 'https://static.vecteezy.com/system/resources/previews/048/448/720/original/ox-cartoon-colored-clipart-illustration-free-free-vector.jpg';
    } 
    else if (indice === 2) {
      this.signo = 'Tigre';
      this.imagenSigno = 'https://static.vecteezy.com/system/resources/previews/007/270/889/non_2x/cartoon-baby-tiger-isolated-on-white-background-vector.jpg';
    } 
    else if (indice === 3) {
      this.signo = 'Conejo';
      this.imagenSigno = 'https://i.pinimg.com/736x/e4/85/db/e485db7be1c0ac269b23262b49eba6a4.jpg';
    } 
    else if (indice === 4) {
      this.signo = 'Dragón';
      this.imagenSigno = 'https://img.freepik.com/premium-vector/illustration-traditional-chinese-dragon-vector-illustration_880158-7.jpg?w=2000';
    } 
    else if (indice === 5) {
      this.signo = 'Serpiente';
      this.imagenSigno = 'https://static.vecteezy.com/system/resources/previews/019/639/372/original/cartoon-illustration-of-a-snake-vector.jpg';
    } 
    else if (indice === 6) {
      this.signo = 'Caballo';
      this.imagenSigno = 'https://img.freepik.com/vector-premium/caballo-marron-dibujos-animados-aislado-blanco_29190-5049.jpg?w=2000';
    } 
    else if (indice === 7) {
      this.signo = 'Cabra';
      this.imagenSigno = 'https://img.freepik.com/vector-premium/linda-ilustracion-vectorial-cabra-dibujada-aislada-fondo-blanco_1023984-14737.jpg?w=1480';
    } 
    else if (indice === 8) {
      this.signo = 'Mono';
      this.imagenSigno = 'https://tse4.mm.bing.net/th/id/OIP.OU4VmoyZM3eWaydd4-jzNwHaJe?pid=Api&P=0&h=180';
    } 
    else if (indice === 9) {
      this.signo = 'Gallo';
      this.imagenSigno = 'https://static.vecteezy.com/system/resources/previews/023/959/271/original/illustration-of-rooster-in-cartoon-style-free-png.png';
    } 
    else if (indice === 10) {
      this.signo = 'Perro';
      this.imagenSigno = 'https://i.pinimg.com/originals/23/82/e6/2382e6466fd05407c68d7f531e71fb29.jpg';
    } 
    else {
      this.signo = 'Cerdo';
      this.imagenSigno = 'https://static.vecteezy.com/system/resources/previews/017/048/269/original/cute-pig-illustration-pig-kawaii-chibi-drawing-style-pig-cartoon-vector.jpg';
    }
  
  }
}

