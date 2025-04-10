import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-switch-ex8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './switch-ex8.component.html',
  styleUrl: './switch-ex8.component.css'
})
export class SwitchEx8Component {
  valor:number = 1;
  valor2:string = "dois";
  // Crirei o valor 3 somente para validar que o valor nao sera conhecido
  valor3:string = "tres"
}
