import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

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
  constructor(private toastController: ToastController) { }

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
  multiplicar()
  {
    this.resultado = "" + (Number(this.n1) * Number(this.n2));
  }
  async dividir()
  {
    if(Number(this.n2) != 0)
      this.resultado = "" + (Number(this.n1) / Number(this.n2));
    else
    {
      const toast = await this.toastController.create({
        message: 'No se puede dividir por cero' ,
        duration: 3000,
        position:"middle", // top,bottom
        color: "danger",
      });
      await toast.present();
    }
  }
  
  // Ejercicios:
  // crear una nueva pagina que permita calculador el promedio de 3 notas,
  // mostrar si aprobó o no, según resultado obtenido.
  // usar alert si reprueba y toast si aprueba.
}
