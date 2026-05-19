import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ClientesService } from '../../../core/services/clientes.service';
import { Cliente } from '../../../core/services/types/types';

@Component({
  selector: 'app-alterar-clientes',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alterar-clientes.component.html',
  styleUrl: './alterar-clientes.component.css'
})
export class AlterarClientesComponent implements OnInit {
  form!: FormGroup;
  idCliente!: number;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: ClientesService
  ) { }

  ngOnInit(): void {
    // Pega o ID que vem na URL (ex: /clientes-alterar/1)
    this.idCliente = Number(this.route.snapshot.paramMap.get('id'));

    // Monta o formulário vazio
    this.form = this.fb.group({
      nome: [''],
      email: [''],
      telefone: ['']
    });

    // Busca os dados no banco e preenche o formulário
    this.service.buscarPorId(this.idCliente).subscribe(cliente => {
      if (cliente) {
        this.form.patchValue({
          nome: cliente.nome,
          email: cliente.email,
          telefone: cliente.telefone
        });
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      // Junta o ID da URL com os dados novos do formulário
      const clienteAtualizado: Cliente = {
        id: this.idCliente,
        ...this.form.value 
      };

      // Manda pro banco e volta pra listagem
      this.service.editar(clienteAtualizado).subscribe(() => {
        this.router.navigate(['/clientes-listagem']);
      });
    }
  }
}