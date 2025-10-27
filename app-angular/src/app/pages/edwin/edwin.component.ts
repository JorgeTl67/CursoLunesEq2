import { Component } from '@angular/core';

@Component({
  selector: 'app-edwin',
  templateUrl: './edwin.component.html',
  styleUrls: ['./edwin.component.scss']
})
export class EdwinComponent {
  onMouseMove(event: MouseEvent) {
    const tarjeta = event.currentTarget as HTMLElement;
    const rect = tarjeta.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    tarjeta.style.setProperty('--x', `${x}px`);
    tarjeta.style.setProperty('--y', `${y}px`);

    const rotateX = (y / rect.height - 0.5) * 20;
    const rotateY = (x / rect.width - 0.5) * -20;

    tarjeta.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }

  onMouseLeave() {
    const tarjetas = document.querySelectorAll('.tarjeta');
    tarjetas.forEach(tarjeta => {
      (tarjeta as HTMLElement).style.transform = 'rotateX(0deg) rotateY(0deg)';
    });
  }
}
