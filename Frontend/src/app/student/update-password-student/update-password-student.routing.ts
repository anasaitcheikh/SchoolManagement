import { Routes, RouterModule } from '@angular/router';
import { UpdatePasswordStudentComponent } from './update-password-student.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UpdatePasswordStudentComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
