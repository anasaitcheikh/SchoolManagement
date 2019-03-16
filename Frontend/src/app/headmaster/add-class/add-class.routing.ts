import { Routes, RouterModule } from '@angular/router';
import {AddClassComponent} from './add-class.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AddClassComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
