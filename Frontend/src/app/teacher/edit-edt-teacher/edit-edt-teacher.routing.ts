import { Routes, RouterModule } from '@angular/router';
import { EditEdtTeacherComponent } from './edit-edt-teacher.component';

const childRoutes: Routes = [
    {
        path: '',
        component: EditEdtTeacherComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
