import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ClientesService } from '../../../core/services/clientes.service';
import { Cliente } from '../../../core/services/types/types';

@Component({
  selector: 'app-listagem-clientes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listagem-clientes.component.html',
  styleUrl: './listagem-clientes.component.css'
})
export class ListagemClientesComponent implements OnInit {
  listaClientes: Cliente[] = [];

  constructor(private service: ClientesService) { }

  // Assim que a página abre, carrega a lista de clientes
  ngOnInit(): void {
    this.carregarClientes();
  }

  carregarClientes(): void {
    this.service.listar().subscribe((clientes) => {
      this.listaClientes = clientes;
    });
  }

  excluir(id: number | string | undefined): void {
    if (id) {
      if(confirm('Tens a certeza que desejas excluir este cliente?')) {
        this.service.excluir(id).subscribe(() => {
          // Atualiza a tabela removendo o cliente apagado
          this.listaClientes = this.listaClientes.filter(cliente => cliente.id !== id);
        });
      }
    }
  }
}