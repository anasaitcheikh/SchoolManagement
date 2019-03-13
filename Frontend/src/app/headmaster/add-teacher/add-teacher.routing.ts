import { Routes, RouterModule } from '@angular/router';

import {AddTeacherComponent} from './add-teacher.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AddTeacherComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
