import { Routes, RouterModule } from '@angular/router';
import {EnterNotesComponent} from './enter-notes.component';

const childRoutes: Routes = [
  {
    path: '',
    component: EnterNotesComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
