import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sistema-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './sistema-login.component.html',
  styleUrls: ['./sistema-login.component.css']
})
export class SistemaLoginComponent {
  email: string = "";
  senha: string = "";
  mensagem: string = "";
  loginSucesso: boolean = false;

  onSubmit() {
    if (!this.email || !this.senha) {
      this.mensagem = "Preencha todos os campos";
      this.loginSucesso = false;
      return;
    }

    if (this.senha.length < 6) {
      this.mensagem = "Senha deve ter pelo menos 6 caracteres";
      this.loginSucesso = false;
      return;
    }

    if (this.email === "user@teste.com" && this.senha === "123456") {
      this.mensagem = "Login bem-sucedido!";
      this.loginSucesso = true;
    } else {
      this.mensagem = "Acesso negado: Credenciais inválidas";
      this.loginSucesso = false;
    }
  }
}