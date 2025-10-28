import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent {
  integrantes = [
    { 
      nombre: 'Edwin',  
      ruta: '/edwin',
      especialidad: 'Frontend'
    },
    { 
      nombre: 'Jorge', 
      ruta: '/jorge',
      especialidad: 'Full-Stack'
    },
    { 
      nombre: 'Andrea', 
      ruta: '/andrea',
      especialidad: 'UX/UI'
    },
    { 
      nombre: 'Felix', 
      ruta: '/felix',
      especialidad: 'Backend'
    },
    { 
      nombre: 'Persona5', 
      ruta: '/persona5',
      especialidad: 'DevOps'
    },
    { 
      nombre: 'Persona6', 
      ruta: '/persona6',
      especialidad: ''
    },
  ];

  avatarColors = [
    'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
    'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
    'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)'
  ];

  getAvatarColor(index: number): string {
    return this.avatarColors[index % this.avatarColors.length];
  }
}
