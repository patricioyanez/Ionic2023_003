import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-cinco',
  templateUrl: './cinco.page.html',
  styleUrls: ['./cinco.page.scss'],
})
export class CincoPage implements OnInit {

  constructor(private alertController: AlertController) { }

  ngOnInit() {
  }
  async alerta()
  {
    const alert = await this.alertController.create({
      header:'Titulo de Alerta',
      subHeader:"Usando alert controller",
      message:"Mensaje de prueba con alert controller" ,
      buttons:['Ok']
      });
      await  alert.present(); // muestra el alerta con el mensaje      
  }
}
