import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Evento } from './types/types';

@Injectable({
  providedIn: 'root'
})
export class EventosService {
  // Endereço da nossa API falsa (JSON-Server)
  private readonly API = 'http://localhost:3000/eventos';

  constructor(private http: HttpClient) { }

  // GET: Vai buscar todos os eventos
  listar(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.API);
  }

  // POST: Guarda um novo evento
  incluir(evento: Evento): Observable<Evento> {
    return this.http.post<Evento>(this.API, evento);
  }

  // GET: Vai buscar apenas um evento pelo ID
  buscarPorId(id: number | string): Observable<Evento> {
    return this.http.get<Evento>(`${this.API}/${id}`);
  }

  // PUT: Atualiza um evento existente
  editar(evento: Evento): Observable<Evento> {
    return this.http.put<Evento>(`${this.API}/${evento.id}`, evento);
  }

  // DELETE: Apaga um evento
  excluir(id: number | string): Observable<Evento> {
    return this.http.delete<Evento>(`${this.API}/${id}`);
  }
}