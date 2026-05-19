import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../../core/services/clientes.service';
import { Cliente } from '../../../core/services/types/types';

@Component({
  selector: 'app-consultar-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './consultar-clientes.component.html',
  styleUrl: './consultar-clientes.component.css'
})
export class ConsultarClientesComponent {
  idBusca: number | null = null;
  clienteEncontrado: Cliente | null = null;
  erroBusca: string = '';

  constructor(private service: ClientesService) { }

  buscarCliente(): void {
    this.erroBusca = '';
    this.clienteEncontrado = null;

    if (this.idBusca != null) {
      this.service.buscarPorId(this.idBusca).subscribe({
        next: (cliente) => {
          if (cliente) {
            this.clienteEncontrado = cliente;
          } else {
            this.erroBusca = 'Cliente não encontrado.';
          }
        },
        error: () => {
          this.erroBusca = 'Erro ao buscar o cliente. Verifique se o ID existe.';
        }
      });
    }
  }
}