import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.html',
})
export class PerfilComponent implements OnInit {
  email = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
  ) {}

  ngOnInit() {
    this.email = this.route.snapshot.paramMap.get('email') || '';

    if (!this.auth.estaLogado(this.email)) {
      this.router.navigate(['/login']);
    }
  }

  sair() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}