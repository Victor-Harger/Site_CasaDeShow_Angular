import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common'; // Necessário para o [ngClass]

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuExpandido = true; // Começa aberto

  alternarMenu() {
    this.menuExpandido = !this.menuExpandido;
  }
}