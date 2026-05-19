import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EventosService } from '../../../core/services/eventos.service';
import { Evento } from '../../../core/services/types/types';

@Component({
  selector: 'app-cadastrar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cadastrar.component.html',
  styleUrl: './cadastrar.component.css'
})
export class CadastrarComponent {
  // Cria um objeto vazio para receber os dados do formulário
  evento: Evento = {} as Evento;

  constructor(
    private service: EventosService,
    private router: Router
  ) { }

  submeter() {
    // Chama o método incluir do serviço e redireciona para a lista de eventos
    this.service.incluir(this.evento).subscribe(() => {
      this.router.navigate(['/eventos-listagem']);
    });
  }
}