import { Routes, RouterModule } from '@angular/router';
import { UpdatePasswordTeacherComponent } from './update-password-teacher.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UpdatePasswordTeacherComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
