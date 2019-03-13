import { Routes, RouterModule } from '@angular/router';
import { StudentComponent } from './student.component';
import {LoginComponent} from  '../login/login.component'
export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'student',
        component: StudentComponent,
        children: [
            { path: '', redirectTo: 'profile', pathMatch: 'full' },
            { path: 'profile', loadChildren: './profile-student/profile-student.module#ProfileStudentModule' },
            { path: 'result', loadChildren: './result-student/result-student.module#ResultStudentModule' },
            { path: 'timetable',  loadChildren: './timetable-student/timetable-student.module#TimetableStudentModule' },
            { path: 'message', loadChildren: './message-student/message-student.module#MessageStudentModule' },
            { path: 'update-password', loadChildren: './update-password-student/update-password-student.module#UpdatePasswordStudentModule' }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
