import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Operacion } from './operaciones';

@Component({
  selector: 'app-apor-b',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './apor-b.component.html',
  styleUrl: './apor-b.component.css'
})
export class AporBComponent {
  formulario!: FormGroup;
  objMult = new Operacion();
  resultado!: number;
  mensaje: string = '';
  a!: number;
  b!: number;

  constructor() {}

  ngOnInit(): void {
    this.formulario = new FormGroup({
      a: new FormControl(''),
      b: new FormControl('')
    });
  }

  Multiplicar(): void {
    this.objMult.a = Number(this.formulario.value.a);
    this.objMult.b = Number(this.formulario.value.b);

    this.objMult.calcular();

    this.a = this.objMult.a;
     this.b = this.objMult.b;

    this.mensaje = this.objMult.mensaje; //
  }
}