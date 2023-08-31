import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-siete',
  templateUrl: './siete.page.html',
  styleUrls: ['./siete.page.scss'],
})
export class SietePage implements OnInit {
  nombre = "Ignacia";
  apellido = "Ahumada";

  constructor() { }

  ngOnInit() {
  }

}
