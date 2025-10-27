import { Routes } from '@angular/router';
import { FelixComponent } from './pages/felix/felix.component';

export const routes: Routes = [
  { path: '', redirectTo: '/felix', pathMatch: 'full' },
  { path: 'felix', component: FelixComponent },
];
