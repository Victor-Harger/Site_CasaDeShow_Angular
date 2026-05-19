import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EventosService } from '../../../core/services/eventos.service';
import { Evento } from '../../../core/services/types/types';

@Component({
  selector: 'app-alterar',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './alterar.component.html',
  styleUrl: './alterar.component.css'
})
export class AlterarComponent implements OnInit {
  form!: FormGroup;
  idEvento!: number | string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    private service: EventosService
  ) { }

  ngOnInit(): void {
    this.idEvento = this.route.snapshot.paramMap.get('id')!;

    // Cria o formulário e já coloca a "trava" de obrigatório (Validators.required)
    this.form = this.fb.group({
      nome: ['', Validators.required],
      data: ['', Validators.required],
      banda: ['', Validators.required],
      capacidade: [0, Validators.required],
      precoIngresso: [0, Validators.required]
    });

    // Puxa os dados antigos
    this.service.buscarPorId(this.idEvento).subscribe(evento => {
      if (evento) {
        this.form.patchValue(evento);
      }
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const eventoAtualizado: Evento = {
        id: this.idEvento,
        ...this.form.value
      };

      this.service.editar(eventoAtualizado).subscribe(() => {
        this.router.navigate(['/eventos-listagem']);
      });
    }
  }
}