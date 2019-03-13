import { Routes, RouterModule } from '@angular/router';
import { PersonalInfoComponent } from './personal-info.component';

const childRoutes: Routes = [
  {
    path: '',
    component: PersonalInfoComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
