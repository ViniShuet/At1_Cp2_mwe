import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {
  operacao: string = "soma";
  valor1: number = 0;
  valor2: number = 0;

  trocarOperacao(event: Event): void {
    const elementoSelecionado = event.target as HTMLSelectElement;
    this.operacao = elementoSelecionado.value;
  }

  calcular(): void {
  }
}
