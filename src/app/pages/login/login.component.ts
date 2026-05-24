import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/login.service';


@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  usuario = '';
  senha = '';
  lembrar = false;

  mensagemErro = '';
  loading = false;

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  handleLogin() {
    this.mensagemErro = '';

    if (!this.usuario || !this.senha) {
      this.mensagemErro = 'Preencha todos os campos.';
      return;
    }

    this.loading = true;

    this.authService
      .login(this.usuario, this.senha)
      .subscribe((res: any) => {

        if (res.length > 0) {

          if (this.lembrar) {
            localStorage.setItem('auth', 'true');
          } else {
            sessionStorage.setItem('auth', 'true');
          }

          this.router.navigate(['/eventos-listagem']);

        } else {
          this.loading = false;
          this.mensagemErro = 'Usuário ou senha incorretos.';
        }
      });
  }
}