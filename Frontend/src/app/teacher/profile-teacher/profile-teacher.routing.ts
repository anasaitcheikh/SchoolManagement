import { Routes, RouterModule } from '@angular/router';
import { ProfileTeacherComponent } from './profile-teacher.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ProfileTeacherComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
