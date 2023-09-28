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
    if(this.id.length < 1)
      this.enviarMensaje('Falta id');
    else if(this.nombre.length < 1)
      this.enviarMensaje('Falta Nombre');
    else
    {
      await this.storage.set(this.id, this.nombre);
      this.id = this.nombre = '';
      this.enviarMensaje('Nombre Guardado', 'success');
    }
  }
  async enviarMensaje(mensaje:string, color:string = 'danger')
  {
    const t = await this.toast.create({
      message : mensaje,
      duration: 3000,
      color   : color
    });
    t.present();
  }
}
