import { Routes, RouterModule } from '@angular/router';

import {AllClassesComponent} from './all-classes/all-classes.component';
import { EditClassComponent } from './edit-class/edit-class.component';


const childRoutes: Routes = [
  {
    path: '',
    component: AllClassesComponent
  },

  {
    path: 'editClass/:id',
    component: EditClassComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
