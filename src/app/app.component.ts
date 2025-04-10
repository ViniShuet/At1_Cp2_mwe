import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchComponent } from './components/switch/switch.component';
import { ListaForComponent } from './components/lista-for/lista-for.component';
import { IfElseComponent } from './components/if-else/if-else.component';
import { ListaDinamicaComponent } from './components/lista-dinamica/lista-dinamica.component';
import { Switchex6Component } from './components/switchex6/switchex6.component';
import { ForEx7Component } from './components/for-ex7/for-ex7.component';
import { SwitchEx8Component } from './components/switch-ex8/switch-ex8.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    SwitchComponent, 
    ListaForComponent, 
    IfElseComponent, 
    ListaDinamicaComponent, 
    Switchex6Component, 
    ForEx7Component, 
    SwitchEx8Component
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-at1-cp2';

}
