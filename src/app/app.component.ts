import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SwitchComponent } from './components/switch/switch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SwitchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-at1-cp2';
  
}
