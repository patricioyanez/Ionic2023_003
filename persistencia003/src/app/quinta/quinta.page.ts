import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-quinta',
  templateUrl: './quinta.page.html',
  styleUrls: ['./quinta.page.scss'],
})
export class QuintaPage implements OnInit {
  persona: any = [];
  constructor(private crud: CrudService,
              private toast: ToastController) { }

  ngOnInit() {
  }
  async agregar()
  {
    //Ejercicio 1: Validar todos los datos
    // antes de guardar
    if(!this.persona.rut)
      this.mensajeError('Falta el rut');
    else if(!this.persona.nombre)
      this.mensajeError('Falta el nombre');
    else
    {
      this.crud.guardar(this.persona.rut, this.persona);
      const t = await this.toast.create({
        message : 'Guardado con éxito',
        icon    : 'checkmark-circle-outline',
        duration: 3000,
        color   : 'success'
      });
      t.present();
    }
  }

  async mensajeError(mensaje:string)
  {
    const t = await this.toast.create({
      message : mensaje,
      icon    : 'close',
      duration: 3000
    });
    t.present();
  }
}
