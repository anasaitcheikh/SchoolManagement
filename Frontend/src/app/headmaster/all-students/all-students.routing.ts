import { Routes, RouterModule } from '@angular/router';

import {AllStudentsComponent} from './all-students.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AllStudentsComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
