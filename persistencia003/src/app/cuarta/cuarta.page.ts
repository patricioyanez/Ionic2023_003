import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-cuarta',
  templateUrl: './cuarta.page.html',
  styleUrls: ['./cuarta.page.scss'],
})
export class CuartaPage implements OnInit {
  id:string = '';
  nombre:string='';
  constructor(private storage: Storage,
    private toast:ToastController) { }

  ngOnInit() {
    this.storage.create();    
  }
  async agregar()
  {
    if(this.nombre.trim().length > 0)
    {
      await this.storage.set(this.id, this.nombre);
      this.id = this.nombre = '';
      this.enviarMensaje('Nombre Guardado');
    }
    else
      this.enviarMensaje('Falta Nombre');
  }

  async enviarMensaje(mensaje:string)
  {
    const t = await this.toast.create({
      message : mensaje,
      duration: 3000,
      color   : 'warning'
    });
    t.present();
  }
}
