import { Routes, RouterModule } from '@angular/router';
import { UploadcourseTeacherComponent } from './uploadcourse-teacher.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UploadcourseTeacherComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
