import { Routes } from '@angular/router';

// Imports de Eventos
import { ListagemComponent } from './pages/eventos/listagem/listagem.component';
import { CadastrarComponent } from './pages/eventos/cadastrar/cadastrar.component';
import { ConsultarComponent } from './pages/eventos/consultar/consultar.component';
import { AlterarComponent } from './pages/eventos/alterar/alterar.component';
import { ExcluirComponent } from './pages/eventos/excluir/excluir.component';

// Imports de Clientes
import { ListagemClientesComponent } from './pages/clientes/listagem-clientes/listagem-clientes.component';
import { CadastrarClientesComponent } from './pages/clientes/cadastrar-clientes/cadastrar-clientes.component';
import { ConsultarClientesComponent } from './pages/clientes/consultar-clientes/consultar-clientes.component';
import { AlterarClientesComponent } from './pages/clientes/alterar-clientes/alterar-clientes.component';
import { ExcluirClientesComponent } from './pages/clientes/excluir-clientes/excluir-clientes.component';

// Imports de Pedidos
import { ListagemPedidoComponent } from './pages/pedidos/listagem/listagem.component';
// Certifique-se de que o caminho abaixo reflete a pasta 'cadastrar-pedido' que você criou:
import { CadastrarPedidoComponent } from './pages/pedidos/cadastrar-pedido/cadastrar-pedido.component';

export const routes: Routes = [
  { path: '', redirectTo: 'eventos-listagem', pathMatch: 'full' },

  // Rotas de Eventos
  { path: 'eventos-listagem', component: ListagemComponent },
  { path: 'eventos-cadastrar', component: CadastrarComponent },
  { path: 'eventos-consultar', component: ConsultarComponent },
  { path: 'eventos-alterar/:id', component: AlterarComponent },
  { path: 'eventos-excluir', component: ExcluirComponent },

  // Rotas de Clientes
  { path: 'clientes-listagem', component: ListagemClientesComponent },
  { path: 'clientes-cadastrar', component: CadastrarClientesComponent },
  { path: 'clientes-consultar', component: ConsultarClientesComponent },
  { path: 'clientes-alterar/:id', component: AlterarClientesComponent },
  { path: 'clientes-excluir', component: ExcluirClientesComponent },

  // Rotas de Pedidos
  { path: 'pedidos-listagem', component: ListagemPedidoComponent },
  { path: 'pedidos-cadastrar', component: CadastrarPedidoComponent },

  { path: '**', redirectTo: 'eventos-listagem' }
];