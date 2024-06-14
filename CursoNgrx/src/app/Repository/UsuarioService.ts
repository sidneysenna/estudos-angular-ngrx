import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UsuarioModel } from '../Models/UsuarioModel';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  constructor(private http: HttpClient) {}
  getUsuario(id: number) {
    return this.http.get<UsuarioModel>('http://localhost:3000/usuarios/' + id);
  }
  getUsuarios() {
    return this.http.get<UsuarioModel[]>('http://localhost:3000/usuarios');
  }

  addUsuario(record: UsuarioModel) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.post<UsuarioModel>(
      'http://localhost:3000/usuarios',
      JSON.stringify(record),
      { headers: headers }
    );
  }

  updateUsuario(record: UsuarioModel) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.put<UsuarioModel>(
      'http://localhost:3000/usuarios' + record.id,
      {
        headers: headers,
      }
    );
  }

  deleteUsuario(id: number) {
    let headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.http.delete('http://localhost:3000/usuarios' + id, {
      headers: headers,
    });
  }
}
