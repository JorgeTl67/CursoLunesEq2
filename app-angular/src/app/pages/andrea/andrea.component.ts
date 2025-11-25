import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-andrea',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './andrea.component.html',
  styleUrls: ['./andrea.component.scss']
})
export class AndreaComponent {
  comandos: { comando: string; respuesta: string }[] = [
    { comando: 'SPECIALTY', respuesta: 'Desarrollo de Software  Area Multiplataforma' },
    { comando: 'INTERESTS', respuesta: 'BTS, los ojos de tapioca' },
    { comando: 'STATUS', respuesta: 'READY _' }
  ];
}
