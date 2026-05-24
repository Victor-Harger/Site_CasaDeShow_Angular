import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Cliente } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {
  private readonly API = 'http://localhost:3000/clientes';

  constructor(private http: HttpClient) { }

  listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API);
  }

  incluir(cliente: Cliente): Observable<Cliente> {
    return this.http.get<Cliente[]>(this.API).pipe(
      switchMap(clientes => {
        const novoId = clientes.length > 0
          ? Math.max(...clientes.map(c => Number(c.id))) + 1
          : 1;

        const novoCliente = { ...cliente, id: novoId };
        return this.http.post<Cliente>(this.API, novoCliente);
      })
    );
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