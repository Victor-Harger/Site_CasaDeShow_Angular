import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EventosService } from '../../../core/services/eventos.service';
import { Evento } from '../../../core/services/types/types';

@Component({
  selector: 'app-listagem',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listagem.component.html',
  styleUrl: './listagem.component.css'
})
export class ListagemComponent implements OnInit {
  listaEventos: Evento[] = [];

  constructor(private service: EventosService) { }

  // Assim que a página abre, carrega a lista
  ngOnInit(): void {
    this.carregarEventos();
  }

  carregarEventos(): void {
    this.service.listar().subscribe((eventos) => {
      this.listaEventos = eventos;
    });
  }

  excluir(id: number | string | undefined): void {
    if (id) {
      if(confirm('Tem a certeza que deseja excluir este evento?')) {
        this.service.excluir(id).subscribe(() => {
          // Atualiza a tabela removendo o evento apagado
          this.listaEventos = this.listaEventos.filter(evento => evento.id !== id);
        });
      }
    }
  }
}