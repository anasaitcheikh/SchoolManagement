import { Routes, RouterModule } from '@angular/router';
import { TimetableStudentComponent } from './timetable-student.component';

const childRoutes: Routes = [
    {
        path: '',
        component: TimetableStudentComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
