import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.html',
})
export class Login {
  email = '';
  senha = '';
  erro = '';

  constructor(private auth: AuthService, private router: Router) {}

  entrar() {
    if (!this.email || !this.senha) {
      this.erro = 'Preencha todos os campos!';
      return;
    }

    if (this.auth.login(this.email, this.senha)) {
      this.router.navigate(['/perfil', this.email]);
    } else {
      this.erro = 'E-mail ou senha incorretos!';
    }
  }
}