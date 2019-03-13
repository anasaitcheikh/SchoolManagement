import { Routes, RouterModule } from '@angular/router';
import { EdtTeacherComponent } from './edt-teacher.component';

const childRoutes: Routes = [
    {
        path: '',
        component: EdtTeacherComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
