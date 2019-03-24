import { Routes, RouterModule } from '@angular/router';

import {ListClassesTeacherComponent} from './list-classes-teacher/list-classes-teacher.component';
import {AllStudentsComponent} from './all-students/all-students.component'


const childRoutes: Routes = [ 
  {
    path: '',
    component: ListClassesTeacherComponent
  },
  {
    path: 'allstud/:id',
    component: AllStudentsComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
