import { Routes, RouterModule } from '@angular/router';
import { IconStudentComponent } from './icon-student.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IconStudentComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
