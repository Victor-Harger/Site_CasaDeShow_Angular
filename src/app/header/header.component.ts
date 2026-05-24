import { Component, HostListener } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  scrolled = false;
  mobileMenuAberto = false;

  @HostListener('window:scroll')
  onScroll(): void {
    this.scrolled = window.scrollY > 20;
  }

  toggleMobileMenu(): void {
    this.mobileMenuAberto = !this.mobileMenuAberto;
  }

  fecharMobileMenu(): void {
    this.mobileMenuAberto = false;
  }

  @HostListener('document:click', ['$event'])
  onClickFora(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    const clickDentroDoMenu = target.closest('#mobile-menu') || target.closest('.hamburger');
    if (!clickDentroDoMenu) {
      this.mobileMenuAberto = false;
    }
  }
}