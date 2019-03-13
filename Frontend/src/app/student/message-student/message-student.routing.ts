import { Routes, RouterModule } from '@angular/router';
import { MessageStudentComponent } from './message-student.component';

const childRoutes: Routes = [
    {
        path: '',
        component: MessageStudentComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
