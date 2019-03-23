import { Routes, RouterModule } from '@angular/router';
import { ViewClassesComponent } from './view-classes.component';

const childRoutes: Routes = [
  {
    path: '',
    component: ViewClassesComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
