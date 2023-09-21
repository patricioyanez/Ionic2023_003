import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tercera-detalle',
  templateUrl: './tercera-detalle.page.html',
  styleUrls: ['./tercera-detalle.page.scss'],
})
export class TerceraDetallePage implements OnInit {
  personas = [
    {
      id    : 1,
      nombre: 'Juan',
      edad  : 20,
      foto  : 'https://img.freepik.com/foto-gratis/retrato-estudio-hombre-moreno-confianza_1187-5799.jpg?w=2000'
    },
    {
      id    : 2,
      nombre: 'Diana',
      edad  : 30,
      foto  : 'https://image.shutterstock.com/image-photo/happy-young-woman-sitting-on-260nw-2018571389.jpg'

    },
    {
      id    : 3,
      nombre: 'Pedro',
      edad  : 45,
      foto  : 'https://img.freepik.com/foto-gratis/apuesto-hombre-empresario-sonriendo-alegre_176420-17877.jpg?w=2000'

    }
  ];
  persona : any;
  constructor(private activedRoute: ActivatedRoute) { }

  ngOnInit() { // se ejecuta antes del render y solo una única vez.
    this.activedRoute.paramMap.subscribe(paramMap =>{
      let id = Number(paramMap.get('id'));
      this.persona = this.personas.find(x => {return x.id == id})
    })
  }

}
