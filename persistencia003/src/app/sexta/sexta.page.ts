import { Component, OnInit } from '@angular/core';
import { ApirestService } from './apirest.service';

@Component({
  selector: 'app-sexta',
  templateUrl: './sexta.page.html',
  styleUrls: ['./sexta.page.scss'],
})
export class SextaPage implements OnInit {
  usuarios: any;
  constructor(private api: ApirestService) { }

  ngOnInit() {}


  async listar(){
    await this.api.getUsers();
    this.usuarios = this.api.listado;
  }
}
