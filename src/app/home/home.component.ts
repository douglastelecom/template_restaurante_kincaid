import { Component } from '@angular/core';
import { CarrosselComponent } from '../shared/carrossel/carrossel.component';

@Component({
  selector: 'app-home',
  imports: [CarrosselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    paths: string[] = [
       'assets/images/carrossel/carrossel-1.jpeg',
       'assets/images/carrossel/carrossel-2.jpeg',
       'assets/images/carrossel/carrossel-3.png'
    ];
}
