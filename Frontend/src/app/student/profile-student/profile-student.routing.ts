import { Routes, RouterModule } from '@angular/router';
import { ProfileStudentComponent } from './profile-student.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ProfileStudentComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
