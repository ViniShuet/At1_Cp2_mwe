import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-dinamica',
  standalone: true,
  imports: [],
  templateUrl: './lista-dinamica.component.html',
  styleUrl: './lista-dinamica.component.css'
})
export class ListaDinamicaComponent {
  tarefas : string[]= ["Estudar Angular", "Fazer exercicíos", "Revisar código"]

  removerItem(index: number): void {
    if (index >= 0 && index < this.tarefas.length) {
      this.tarefas.splice(index, 1);
    }
  }

}
