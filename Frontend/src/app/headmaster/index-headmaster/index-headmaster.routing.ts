import { Routes, RouterModule } from '@angular/router';
import { IndexHeadmasterComponent } from './index-headmaster.component';

const childRoutes: Routes = [
    {
        path: '',
        component: IndexHeadmasterComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
