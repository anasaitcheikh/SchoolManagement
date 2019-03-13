import { Routes, RouterModule } from '@angular/router';
import { ResultStudentComponent } from './result-student.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ResultStudentComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
