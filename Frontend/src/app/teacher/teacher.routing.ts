import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import {LoginComponent} from '../login/login.component';
export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'teacher',
        component: TeacherComponent,
        children: [
            { path: '', redirectTo: 'edt', pathMatch: 'full' },
            { path: 'edt', loadChildren: './edt-teacher/edt-teacher.module#EdtTeacherModule' },
            { path: 'profile', loadChildren: './profile-teacher/profile-teacher.module#ProfileTeacherModule' },
            { path: 'edit-edt', loadChildren: './edit-edt-teacher/edit-edt-teacher.module#EditEdtTeacherModule' },
            { path: 'message', loadChildren: './message-teacher/message-teacher.module#MessageTeacherModule' },
            { path: 'update-password', loadChildren: './update-password-teacher/update-password-teacher.module#UpdatePasswordTeacherModule' },
            { path: 'saisirnotes', loadChildren: './saisirnotes-teacher/saisirnotes-teacher.module#SaisirnotesTeacherModule' },
           // { path: 'classes-list', loadChildren: './list-classes-teacher/list-classes-teacher.module#ListClassesTeacherModule' },
           { path: 'classes-list', loadChildren: './all-classes/all-classes.module#AllClassesModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
