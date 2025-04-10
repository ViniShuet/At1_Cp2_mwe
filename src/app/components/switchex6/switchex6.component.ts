import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switchex6',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switchex6.component.html',
  styleUrl: './switchex6.component.css'
})
export class Switchex6Component {
  status: string = "pendente";

  trocarValor(event: Event): void {
    const elementoSelecionado = event.target as HTMLSelectElement;
    this.status = elementoSelecionado.value;
  }
}
