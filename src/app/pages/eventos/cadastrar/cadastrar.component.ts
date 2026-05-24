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
  evento: Evento = {  
  nome: '',
  data: '',
  banda: '',
  genero: '',
  capacidade: 0,
  precoIngresso: 0
} as Evento;

  constructor(
    private service: EventosService,
    private router: Router
  ) { }

  private gerarIdNumerico(): number {
    // 6 dígitos (ex.: 100000 a 999999)
    return Math.floor(100000 + Math.random() * 900000);
  }

  submeter() {
    this.evento.id = this.gerarIdNumerico();

    this.service.incluir(this.evento).subscribe(() => {
      this.router.navigate(['/eventos-listagem']);
    });
  }
}
