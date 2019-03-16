import { Routes, RouterModule } from '@angular/router';
import { ViewPlanningComponent } from './view-planning.component';

const childRoutes: Routes = [
  {
    path: '',
    component: ViewPlanningComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
