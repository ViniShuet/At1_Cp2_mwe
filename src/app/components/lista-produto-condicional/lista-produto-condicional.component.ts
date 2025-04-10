import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-produto-condicional',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lista-produto-condicional.component.html',
  styleUrl: './lista-produto-condicional.component.css'
})
export class ListaProdutoCondicionalComponent {
  produtos = [
    {nome:"Notebook", preco:3000, promocao:true},
    {nome:"Mouse", preco:50, promocao:false}];

    color:string = "red" 

}
