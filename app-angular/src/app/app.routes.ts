import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { EdwinComponent } from './pages/edwin/edwin.component';
import { JorgeComponent } from './pages/jorge/jorge.component';
import { AndreaComponent } from './pages/andrea/andrea.component';
import { FelixComponent } from './pages/felix/felix.component';
import { Persona5Component } from './pages/persona5/persona5.component';
import { Persona6Component } from './pages/persona6/persona6.component';

export const routes: Routes = [
    { path: '', component: IndexComponent },
    { path: 'edwin', component: EdwinComponent },
    { path: 'jorge', component: JorgeComponent },
    { path: 'andrea', component: AndreaComponent },
    { path: 'felix', component: FelixComponent },
    { path: 'persona5', component: Persona5Component },
    { path: 'persona6', component: Persona6Component },
];
