import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../sexta/apirest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sextacomentario',
  templateUrl: './sextacomentario.page.html',
  styleUrls: ['./sextacomentario.page.scss'],
})
export class SextacomentarioPage implements OnInit {
  comentarios : any = [];
  constructor(private api: ApirestService,
              private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap =>{
      let idPost =paramMap.get('idPost')??0;
      this.listar(idPost);
    })
  }
  async listar(idPost:any){
    this.api.getPostComments(idPost);
    this.comentarios = this.api.listado;
  }

}
