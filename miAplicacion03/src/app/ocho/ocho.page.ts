import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-ocho',
  templateUrl: './ocho.page.html',
  styleUrls: ['./ocho.page.scss'],
})
export class OchoPage implements OnInit {
  n1 = '';
  n2 : string = '';
  n3 : string;
  promedio : any;
  constructor(private toastController: ToastController) {
    this.n3 = ''; // formas de declarar atributos
   }

  ngOnInit() {
  }
  promediar()
  {
    let nota1 = Number("0" + this.n1); // evita error de string vacio
    let nota2 = Number("0" + this.n2);
    let nota3 = Number("0" + this.n3);

    // validar nota
    if(!nota1 || nota1 < 10 || nota1 > 70)// enviar un alert
      this.mensajeAlerta('Nota 1 no es válida');
    else if(!nota2 || nota2 < 10 || nota2 > 70)
      this.mensajeAlerta('Nota 2 no es válida');
    else if(!nota3 || nota3 < 10 || nota3 > 70)
      this.mensajeAlerta('Nota 3 no es válida');
    else
    {
      //notas correctas
      this.promedio = (nota1 + nota2 + nota3) / 3;
    }
  }
  limpiar()
  {
    this.promedio = this.n1 = this.n2 = this.n3 = '';
  }
  async mensajeAlerta(mensaje: string)
  {
    const toast = await this.toastController.create({
      message   : mensaje,
      duration  : 3000,
      position  : 'middle',
      color     : 'danger',
    });
    await toast.present();
  }
}
