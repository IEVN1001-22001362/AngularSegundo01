import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Zodiaco } from './operaciones';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrl: './zodiaco.component.css'
})
export class ZodiacoComponent {
  formulario!: FormGroup;
  objZodiaco = new Zodiaco();

  nombreCompleto = '';
  edad!: number;
  signo = '';
  imagenSigno = '';

  ngOnInit() {
    this.formulario = new FormGroup({
      nombre: new FormControl(''),
      apellidoP: new FormControl(''),
      apellidoM: new FormControl(''),
      dia: new FormControl(''),
      mes: new FormControl(''),
      anio: new FormControl(''),
      sexo: new FormControl('')
    });
  }

  calcularZodiaco() {

    
    this.objZodiaco.nombre = this.formulario.value.nombre;
    this.objZodiaco.apellidoP = this.formulario.value.apellidoP;
    this.objZodiaco.apellidoM = this.formulario.value.apellidoM;
    this.objZodiaco.dia = this.formulario.value.dia;
    this.objZodiaco.mes = this.formulario.value.mes;
    this.objZodiaco.anio = this.formulario.value.anio;
    this.objZodiaco.sexo = this.formulario.value.sexo;

   
    this.objZodiaco.calcularZodiaco();

    //  resultados
    this.nombreCompleto = this.objZodiaco.nombreCompleto;
    this.edad = this.objZodiaco.edad;
    this.signo = this.objZodiaco.signo;
    this.imagenSigno = this.objZodiaco.imagenSigno;
  }
}

