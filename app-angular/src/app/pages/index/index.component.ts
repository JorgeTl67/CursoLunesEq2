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
    { nombre: 'Edwin', descripcion: 'Página de Edwin: Desarrollo con Angular.', ruta: '/edwin' },
    { nombre: 'Jorge', descripcion: 'Página de Jorge: Descripción de la página.', ruta: '/jorge' },
    { nombre: 'Andrea', descripcion: 'Página de Andrea: Descripción de la página.', ruta: '/andrea' },
    { nombre: 'Felix', descripcion: 'Página de Felix: Descripción de la página.', ruta: '/felix' },
    { nombre: 'Persona5', descripcion: 'Página de Persona5: Descripción de la página.', ruta: '/persona5' },
    { nombre: 'Persona6', descripcion: 'Página de Persona6: Descripción de la página.', ruta: '/persona6' },
  ];

@Component({
  selector: 'app-index',
  imports: [],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class IndexComponent {

}
