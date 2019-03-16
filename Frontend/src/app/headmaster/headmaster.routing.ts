import { Routes, RouterModule } from '@angular/router';
import { HeadmasterComponent } from './headmaster.component';
import {LoginComponent} from '../login/login.component';
export const childRoutes: Routes = [
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'headmaster',
        component: HeadmasterComponent,
        children: [
            { path: '', redirectTo: 'dashboardHeadmaster', pathMatch: 'full' },
            { path: 'dashboardHeadmaster', loadChildren: './index-headmaster/index-headmaster.module#IndexHeadmasterModule' },
           // { path: 'editor', loadChildren: './editor/editor.module#EditorModule' },
           // { path: 'icon', loadChildren: './icon/icon.module#IconModule' },
           { path: 'addClass', loadChildren: './add-class/add-class.module#AddClassModule' },
            { path: 'addStudent', loadChildren: './add-student/add-student.module#AddStudentModule' },
            { path: 'addTeacher', loadChildren: './add-teacher/add-teacher.module#AddTeacherModule' },
            { path: 'allStudents', loadChildren: './all-students/all-students.module#AllStudentsModule' },
            { path: 'bookRoom', loadChildren: './book-room/book-room.module#BookRoomModule' },
            { path: 'userInfo', loadChildren: './personal-info/personal-info.module#PersonalInfoModule' },
            { path: 'uploadcorse', loadChildren: './uploadcorse-headmaster/uploadcorse-headmaster.module#UploadcorseHeadmasterModule' },
            { path: 'timetable-edit', loadChildren: './edit-timetable-headmaster/edit-timetable-headmaster.module#EditTimetableHeadmasterModule' },
            //{ path: 'profile', loadChildren: './profile/profile.module#ProfileModule' },
            //{ path: 'form', loadChildren: './form/form.module#FormModule' },
            //{ path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            //{ path: 'ui', loadChildren: './ui/ui.module#UIModule' },
            //{ path: 'table', loadChildren: './table/table.module#TableModule' },
            //{ path: 'menu-levels', loadChildren: './menu-levels/menu-levels.module#MenuLevelsModule' },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
