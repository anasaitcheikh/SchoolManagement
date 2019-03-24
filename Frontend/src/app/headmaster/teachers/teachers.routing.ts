import { Routes, RouterModule } from '@angular/router';

import {AllTeachersComponent} from './all-teachers/all-teachers.component';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { ShowClassesComponent } from './show-classes/show-classes.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AllTeachersComponent
  },

  {
    path: 'editTeacher/:id',
    component: EditTeacherComponent
  },
  {
    path: 'showClasses/:id',
    component: ShowClassesComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
