import { Routes, RouterModule } from '@angular/router';

import {ListClassesTeacherComponent} from './list-classes-teacher.component';


const childRoutes: Routes = [
  {
    path: '',
    component: ListClassesTeacherComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
