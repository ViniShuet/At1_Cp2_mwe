import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-for.component.html',
  styleUrl: './lista-for.component.css'
})
export class ListaForComponent {
  itens = ["Maçã", "Banana", "Leite"]
}
