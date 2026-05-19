import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientesService } from '../../../core/services/clientes.service';
import { Cliente } from '../../../core/services/types/types';

@Component({
  selector: 'app-cadastrar-clientes',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar-clientes.component.html',
  styleUrl: './cadastrar-clientes.component.css'
})
export class CadastrarClientesComponent {
  // Cria um objeto vazio para receber os dados do formulário
  cliente: Cliente = {} as Cliente;

  constructor(
    private service: ClientesService,
    private router: Router
  ) { }

  submeter() {
    // Chama o POST do serviço e redireciona para a listagem quando terminar
    this.service.incluir(this.cliente).subscribe(() => {
      this.router.navigate(['/clientes-listagem']);
    });
  }
}