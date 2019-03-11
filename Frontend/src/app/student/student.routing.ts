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
            { path: '', redirectTo: 'index-student', pathMatch: 'full' },
            { path: 'index-student', loadChildren: './index-student/index-student.module#IndexStudentModule' },
            { path: 'editor-student', loadChildren: './editor-student/editor-student.module#EditorStudentModule' },
            { path: 'icon-student', loadChildren: './icon-student/icon-student.module#IconStudentModule' },
            { path: 'profile-student', loadChildren: './profile-student/profile-student.module#ProfileStudentModule' },
            { path: 'form-student', loadChildren: './form-student/form-student.module#FormStudentModule' },
            { path: 'charts-student', loadChildren: './charts-student/charts-student.module#ChartsStudentModule' },
            { path: 'ui-student', loadChildren: './ui-student/ui-student.module#UiStudentModule' },
            { path: 'table-student', loadChildren: './table-student/table-student.module#TableStudentModule' },
            { path: 'menu-levels-student', loadChildren: './menu-levels-student/menu-levels-student.module#MenuLevelsStudentModule' }
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
