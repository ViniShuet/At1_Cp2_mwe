import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-if-else',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfElseComponent {
  idade:number = 1;

  aumentarIdade(): void {
    this.idade++;
  }

  diminuirIdade(): void {
      this.idade--;
  }

  trocarIdade(event: Event): void {
    const elementoSelecionado = event.target as HTMLInputElement;
    this.idade = parseInt(elementoSelecionado.value, 10);
  }
}
