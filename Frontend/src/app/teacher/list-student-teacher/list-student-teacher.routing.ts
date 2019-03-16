import { Routes, RouterModule } from '@angular/router';

import {ListStudentTeacherComponent} from './list-student-teacher.component';


const childRoutes: Routes = [
  {
    path: '',
    component: ListStudentTeacherComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
