import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PedidosService } from '../../../core/services/pedidos.service';
import { ClientesService } from '../../../core/services/clientes.service';
import { EventosService } from '../../../core/services/eventos.service';
import { Pedido, Cliente, Evento } from '../../../core/services/types/types';

@Component({
  selector: 'app-cadastrar-pedido',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './cadastrar-pedido.component.html',
  styleUrl: './cadastrar-pedido.component.css'
})
export class CadastrarPedidoComponent implements OnInit {
  pedido: Pedido = { clienteId: 0, eventoId: 0, data: '', total: 0 };
  listaClientes: Cliente[] = [];
  listaEventos: Evento[] = [];

  constructor(
    private pService: PedidosService,
    private cService: ClientesService,
    private eService: EventosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cService.listar().subscribe(c => (this.listaClientes = c));
    this.eService.listar().subscribe(e => (this.listaEventos = e));
  }

  private gerarIdNumerico(): number {
    // 6 dígitos (ex.: 100000 a 999999)
    return Math.floor(100000 + Math.random() * 900000);
  }

  submeter() {
    // Garante que o id seja numérico (se o backend/json-server aceitar)
    this.pedido.id = this.gerarIdNumerico();

    this.pService.incluir(this.pedido).subscribe(() => {
      this.router.navigate(['/pedidos-listagem']);
    });
  }

  // Função que permite números, mas bloqueia o "menos" e o "e"
  bloquearNegativos(event: KeyboardEvent) {
    if (event.key === '-' || event.key === 'e') {
      event.preventDefault();
    }
  }
}

