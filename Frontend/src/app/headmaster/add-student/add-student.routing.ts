import { Routes, RouterModule } from '@angular/router';
import {AddStudentComponent} from './add-student.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AddStudentComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
