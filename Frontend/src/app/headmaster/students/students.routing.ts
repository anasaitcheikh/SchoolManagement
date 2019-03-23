import { Routes, RouterModule } from '@angular/router';

import {AllStudentsComponent} from './all-students/all-students.component';
import { EditStudentComponent } from './edit-student/edit-student.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AllStudentsComponent
  },

  {
    path: 'editStudent/:id',
    component: EditStudentComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
