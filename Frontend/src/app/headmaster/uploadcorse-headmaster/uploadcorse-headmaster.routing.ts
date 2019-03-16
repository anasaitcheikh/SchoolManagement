import { Routes, RouterModule } from '@angular/router';
import { UploadcorseHeadmasterComponent } from './uploadcorse-headmaster.component';

const childRoutes: Routes = [
    {
        path: '',
        component: UploadcorseHeadmasterComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);
