import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {

  private chave = 'usuario_logado';

  login(email: string, senha: string): boolean {
    if (email === 'admin@exemplo.com' && senha === '1234') {
      sessionStorage.setItem(this.chave, email);
      return true;
    }
    return false;
  }

  estaLogado(email: string): boolean {
    return sessionStorage.getItem(this.chave) === email;
  }

  logout(): void {
    sessionStorage.removeItem(this.chave);
  }
}