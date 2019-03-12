import { Routes, RouterModule } from '@angular/router';
import { EditorStudentComponent } from './editor-student.component';

const childRoutes: Routes = [
    {
        path: '',
        component: EditorStudentComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
