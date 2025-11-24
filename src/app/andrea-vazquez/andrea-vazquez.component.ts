import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-andrea-vazquez',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './andrea-vazquez.component.html',
  styleUrls: ['./andrea-vazquez.component.scss']
})
export class AndreaVazquezComponent {
  comandos: { comando: string; respuesta: string }[] = [
    { comando: 'SPECIALTY', respuesta: 'Desarrollo de Software  Area Multiplataforma' },
    { comando: 'INTERESTS', respuesta: 'BTS, los ojos de tapioca' },
    { comando: 'STATUS', respuesta: 'READY _' }
  ];
}
