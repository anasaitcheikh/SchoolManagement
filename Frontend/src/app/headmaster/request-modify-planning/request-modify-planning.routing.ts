import { Routes, RouterModule } from '@angular/router';
import {RequestModifyPlanningComponent} from './request-modify-planning.component';

const childRoutes: Routes = [
  {
    path: '',
    component: RequestModifyPlanningComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
