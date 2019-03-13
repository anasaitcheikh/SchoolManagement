import { Routes, RouterModule } from '@angular/router';
import { SaisirnotesTeacherComponent} from './saisirnotes-teacher.component';

const childRoutes: Routes = [
    {
        path: '',
        component: SaisirnotesTeacherComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
