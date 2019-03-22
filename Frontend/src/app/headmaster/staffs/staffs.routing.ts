import { Routes, RouterModule } from '@angular/router';

import {AllStaffComponent} from './all-staff/all-staff.component';
import { EditStaffComponent } from './edit-staff/edit-staff.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AllStaffComponent
  },

  {
    path: 'editStaff/:id',
    component: EditStaffComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
