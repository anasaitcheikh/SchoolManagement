import { Routes, RouterModule } from '@angular/router';

import {AllTeachersComponent} from './all-teachers.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AllTeachersComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
