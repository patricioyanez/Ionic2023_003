
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

  constructor(private http: HttpClient) { }

// mostrar los datos recibidos en la pagina html
  getUsers()
  {
    const url = this.urlAPI + 'users';
    return this.http.get(url).subscribe((data=[]) => {
      this.listado = data; 
    });
  }
  
  getPostUsers(id:number)
  {
    const url = this.urlAPI + 'users/' + id + '/posts';
    return this.http.get(url).subscribe((data=[]) => {
      this.listado = data; 
    });
  }
}
