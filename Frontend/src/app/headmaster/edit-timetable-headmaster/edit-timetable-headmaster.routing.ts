import { Routes, RouterModule } from '@angular/router';
import { EditTimetableHeadmasterComponent } from './edit-timetable-headmaster.component';

const childRoutes: Routes = [
    {
        path: '',
        component: EditTimetableHeadmasterComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
