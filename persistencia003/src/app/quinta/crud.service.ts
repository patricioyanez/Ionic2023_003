import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  constructor(private storage: Storage) 
  { 
    this.init(); 
  }

  async init()
  {
    await this.storage.create();
  }
  // C.R.U.D

  async guardar(id: string, datos: any)
  { // clave/valor  id => rut / datos => json
    await this.storage.set(id, datos);
  }
  async leer(id:string)
  {
    return this.storage.get(id);
  }
  async eliminar(id:string)
  {
    return this.storage.remove(id);
  }
  async listar()
  {
    let listado: any = [];
    await this.storage.forEach((v,k) => { listado.push(v); });
    return listado;
  }
}
