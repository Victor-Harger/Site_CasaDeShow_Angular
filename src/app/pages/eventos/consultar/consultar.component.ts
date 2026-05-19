import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EventosService } from '../../../core/services/eventos.service';
import { Evento } from '../../../core/services/types/types';

@Component({
  selector: 'app-consultar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consultar.component.html',
  styleUrl: './consultar.component.css'
})
export class ConsultarComponent {
  idBusca: number | null = null;
  eventoEncontrado: Evento | null = null;
  erroBusca: string = '';

  constructor(private service: EventosService) { }

  buscarEvento(): void {
    this.erroBusca = '';
    this.eventoEncontrado = null;

    if (this.idBusca != null) {
      this.service.buscarPorId(this.idBusca).subscribe({
        next: (evento) => {
          if (evento) {
            this.eventoEncontrado = evento;
          } else {
            this.erroBusca = 'Evento não encontrado.';
          }
        },
        error: () => {
          this.erroBusca = 'Erro ao buscar o evento. Verifique se o ID existe.';
        }
      });
    }
  }
}