import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-sistema-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sistema-login.component.html',
  styleUrl: './sistema-login.component.css'
})
export class SistemaLoginComponent {
  email:string = "user@teste.com"
  senha:number = 123456
}
