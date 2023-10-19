
// 1.- import { HttpClientModule, HttpClient } from '@angular/common/http';
// 2.- agregar en providers: [HttpClient,{ provide:
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlAPI = 'https://jsonplaceholder.typicode.com/';
  listado:any =[];
  listado2:any =[];
  listado3:any =[];

  constructor(private http: HttpClient) { }

// mostrar los datos recibidos en la pagina html

  getUsers()
  {
    const url = this.urlAPI + 'users';
    this.http.get(url).subscribe((data=[]) => { this.listado = data; });
    return this.listado;
  }
  
  getPostUsers(id:number)
  {
    this.listado2 = [];
    const url = this.urlAPI + 'users/' + id + '/posts';
    this.http.get(url).subscribe((data=[]) => {this.listado2 = data; });
  }

  getPostComments(id:number)
  {
    const url = this.urlAPI + 'posts/' + id + '/comments';
    this.http.get(url).subscribe((data=[]) => { this.listado3 = data;});
  }
}
