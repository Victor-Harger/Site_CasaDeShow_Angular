import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PedidosService } from '../../../core/services/pedidos.service';
import { Pedido } from '../../../core/services/types/types';

@Component({
  selector: 'app-listagem-pedido',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listagem.component.html'
})
export class ListagemPedidoComponent implements OnInit {
  listaPedidos: Pedido[] = [];

  constructor(private service: PedidosService) {}

  ngOnInit(): void {
    this.service.listar().subscribe(dados => {
      this.listaPedidos = dados;
    });
  }
}