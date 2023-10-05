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
    else if(!this.persona.direccion)
      this.mensajeError('Falta el dirección');
    else if(!this.persona.correo)
      this.mensajeError('Falta el correo');
    else if(!this.persona.telefono)
      this.mensajeError('Falta el teléfono');
    else if(!this.persona.anioNacimiento)
      this.mensajeError('Falta el año de nacimiento');
    else
    {
      this.crud.guardar(this.persona.rut, this.persona);
      this.mensajeExito('Datos guardados');
      this.persona = [];
    }
  }

  async mensajeError(mensaje:string)
  {
    const t = await this.toast.create({
      message : mensaje,
      icon    : 'close',
      duration: 3000,
      color   : 'danger'
    });
    t.present();
  }
  async mensajeExito(mensaje:string)
  {
    const t = await this.toast.create({
      message : mensaje,
      icon    : 'checkmark-circle-outline',
      duration: 3000,
      color   : 'success'
    });
    t.present();
  }

  async leer()
  {
    if(!this.persona.rut)
      this.mensajeError('Falta el rut');
    else
    {
      await this.crud.leer(this.persona.rut).
      then(x => {this.persona = x;})

      if(!this.persona)
      {
        this.mensajeError('Rut no fue encontrado');
        this.persona = [];
      }
    }
  }
}
