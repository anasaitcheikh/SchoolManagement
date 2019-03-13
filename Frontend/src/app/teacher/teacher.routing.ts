import { Routes, RouterModule } from '@angular/router';
import { TeacherComponent } from './teacher.component';
import {LoginComponent} from  '../login/login.component'
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
            { path: 'index', loadChildren: './index/index.module#IndexModule' },
            { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
            { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
            { path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            { path: 'form', loadChildren: './form/form.module#FormModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            { path: 'table', loadChildren: './table/table.module#TableModule' },
            { path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
            { path: 'edt', loadChildren: './edt-teacher/edt-teacher.module#EdtTeacherModule' },
            { path: 'edit-edt', loadChildren: './edit-edt-teacher/edit-edt-teacher.module#EditEdtTeacherModule' },
            { path: 'message', loadChildren: './message-teacher/message-teacher.module#MessageTeacherModule' },
            { path: 'update-password', loadChildren: './update-password-teacher/update-password-teacher.module#UpdatePasswordTeacherModule' },
            { path: 'saisirnotes', loadChildren: './saisirnotes-teacher/saisirnotes-teacher.module#SaisirnotesTeacherModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
