import { Routes, RouterModule } from '@angular/router';
import { IndexStudentComponent } from './index-student.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IndexStudentComponent    }
];

export const routing = RouterModule.forChild(childRoutes);
