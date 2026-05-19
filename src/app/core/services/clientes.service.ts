import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  // Endereço da API falsa para CLIENTES
  private readonly API = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  incluir(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.API, cliente);
  }

  buscarPorId(id: number | string): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.API}/${id}`);
  }

  editar(cliente: Cliente): Observable<Cliente> {
    return this.http.put<Cliente>(`${this.API}/${cliente.id}`, cliente);
  }

  excluir(id: number | string): Observable<Cliente> {
    return this.http.delete<Cliente>(`${this.API}/${id}`);
  }
}