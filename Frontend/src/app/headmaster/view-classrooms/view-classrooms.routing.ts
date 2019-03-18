import { Routes, RouterModule } from '@angular/router';
import { ViewClassroomsComponent } from './view-classrooms.component';

const childRoutes: Routes = [
  {
    path: '',
    component: ViewClassroomsComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
