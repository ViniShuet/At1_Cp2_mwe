import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.css'
})
export class SwitchComponent {
  mes: number = 1;

  trocarValor(event: Event): void {
    const elementoSelecionado = event.target as HTMLInputElement;
    this.mes = parseInt(elementoSelecionado.value, 10);
  }
}
