import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchComponent } from './components/switch/switch.component';
import { ListaForComponent } from './components/lista-for/lista-for.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { ListaDinamicaComponent } from './components/lista-dinamica/lista-dinamica.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchComponent, ListaForComponent, IfElseComponent, ListaDinamicaComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-at1-cp2';
  
}
