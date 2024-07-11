import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';


//COMPONENTS
import { NavbarComponent } from './partials/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'landing-page-angular';
}
