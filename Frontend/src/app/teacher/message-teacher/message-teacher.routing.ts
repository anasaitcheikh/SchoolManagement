import { Routes, RouterModule } from '@angular/router';
import { MessageTeacherComponent } from './message-teacher.component';

const childRoutes: Routes = [
    {
        path: '',
        component: MessageTeacherComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
