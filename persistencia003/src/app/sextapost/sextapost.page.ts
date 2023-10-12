import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../sexta/apirest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sextapost',
  templateUrl: './sextapost.page.html',
  styleUrls: ['./sextapost.page.scss'],
})
export class SextapostPage implements OnInit {
  posts:any = [];
  constructor(private api: ApirestService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      let idUsuario =paramMap.get('idUsuario')??0;
      this.listar(idUsuario);
    })
  }
  async listar(idUsuario:any){
    this.api.getPostUsers(idUsuario);
    this.posts = this.api.listado;
  }
}
