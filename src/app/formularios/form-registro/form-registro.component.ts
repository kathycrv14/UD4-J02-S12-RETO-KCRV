import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-registro',
  templateUrl: './form-registro.component.html',
  styleUrls: ['./form-registro.component.css']
})
export class FormRegistroComponent {

  // Crear atributo de tipo FormBuilder
  constructor(private formBuilder : FormBuilder) { }

  //Estructura del formularioreaxtivo

  //Variable
  registroForm = this.formBuilder.group({
    dni: 
    ['', // Valor del campo dni
      {validators: //Matriz de la validacion
        [Validators.required, Validators.pattern('[0-9]{8}')]
      }
    ],
    nombres: ['', Validators.required],
    apellidos: ['', Validators.required],
    pais: ['', Validators.required],
  });

  //Generar un metodo get para cada cada campo del formulario reactivo
  get dni(){ return this.registroForm.get('dni'); }
  get nombres(){ return this.registroForm.get('nombres'); }
  get apellidos(){ return this.registroForm.get('apellidos'); }
  get pais(){ return this.registroForm.get('pais'); }

    mensaje : string ="";

  onSubmit(){

    if(!this.registroForm.valid){
      alert('Alguna validación no se ha cumplido');
      return;
    }else{
      this.mensaje = "Registro Exitoso!";
    }
  }
}
