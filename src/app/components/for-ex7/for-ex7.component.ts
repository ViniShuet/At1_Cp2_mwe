import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-for-ex7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './for-ex7.component.html',
  styleUrl: './for-ex7.component.css'
})
export class ForEx7Component {
  usuarios = [{ nome: "Ana", idade: 25 }, { nome: "Carlos", idade: 30 }];

}
