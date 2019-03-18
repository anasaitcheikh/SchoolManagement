import { Routes, RouterModule } from '@angular/router';
import {AddStaffComponent} from './add-staff.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AddStaffComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
