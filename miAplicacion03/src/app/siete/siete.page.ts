import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siete',
  templateUrl: './siete.page.html',
  styleUrls: ['./siete.page.scss'],
})
export class SietePage implements OnInit {
  nombre = "Ignacia";
  apellido = "Ahumada";

  n1= '';
  n2= '';
  resultado = '';
  constructor() { }

  ngOnInit() {
  }
  sumar()
  {
    this.resultado = this.n1 + this.n2;
  }
  restar()
  {
    this.resultado = "" + (Number(this.n1) - Number(this.n2));
  }

}
