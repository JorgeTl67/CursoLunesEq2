import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AndreaVazquezComponent } from './andrea-vazquez/andrea-vazquez.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AndreaVazquezComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-angular';
}
