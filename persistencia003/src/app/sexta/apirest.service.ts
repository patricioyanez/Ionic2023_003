import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApirestService {
  private urlAPI = 'https://jsonplaceholder.typicode.com/';
  usuarios:any =[];

  constructor(private http: HttpClient) { }

  getUsers()
  {
    const url = this.urlAPI + 'users';
    return this.http.get(url).subscribe((data=[]) => {
      this.usuarios = data; 
    });

// mostrar los datos recibidos en la pagina html
  }
}
