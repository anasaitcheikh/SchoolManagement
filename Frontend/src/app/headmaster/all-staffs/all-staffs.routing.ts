import { Routes, RouterModule } from '@angular/router';

import {AllStaffsComponent} from './all-staffs.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AllStaffsComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
