import { Routes, RouterModule } from '@angular/router';

import {AllTeachersComponent} from './all-teachers/all-teachers.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AllTeachersComponent
  },

  {
    path: 'editTeacher/:id',
    component: EditTeacherComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
