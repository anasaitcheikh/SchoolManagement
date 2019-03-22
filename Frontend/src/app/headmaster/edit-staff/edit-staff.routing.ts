import { Routes, RouterModule } from '@angular/router';
import {EditStaffComponent} from './edit-staff.component';


const childRoutes: Routes = [
  {
    path: '',
    component: EditStaffComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
