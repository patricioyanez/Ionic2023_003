import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seis',
  templateUrl: './seis.page.html',
  styleUrls: ['./seis.page.scss'],
})
export class SeisPage implements OnInit {
  numero : number; // debe inicializar
  nombre : string;
  permitir: boolean;
  algo : any;
  numero1 : number = 1;

  apellido : string = "Pérez";
  mensaje = "Alumno con excelencia académica";

  asignaturas = [
    {nombre:"Base de datos" , nota:39.55},
    {nombre:"Programación"  , nota:45},
    {nombre:"Matématica"    , nota:33},    
  ]

  constructor() { 
    this.numero = 1;
    this.nombre = "Ana";
    this.permitir = true;
  }

  ngOnInit() {
  }

}
