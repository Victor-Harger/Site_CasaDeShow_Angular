import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { ClientesService } from '../../../core/services/clientes.service';

@Component({
  selector: 'app-excluir-clientes',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './excluir-clientes.component.html',
  styleUrl: './excluir-clientes.component.css'
})
export class ExcluirClientesComponent {
  idExcluir: number | null = null;
  mensagemSucesso: string = '';
  erroMensagem: string = '';

  constructor(
    private clientesService: ClientesService,
    private router: Router
  ) { }

  excluirCliente(): void {
    this.mensagemSucesso = '';
    this.erroMensagem = '';

    if (this.idExcluir != null) {
      this.clientesService.excluir(this.idExcluir).subscribe({
        next: () => {
          // Quando dá certo, ele joga você de volta para a tabela atualizada
          this.router.navigate(['/clientes-listagem']); 
        },
        error: () => {
          this.erroMensagem = `Erro ao excluir o cliente. Verifique se o ID existe.`;
        }
      });
    }
  }
}