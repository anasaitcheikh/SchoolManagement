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
            { path: 'addStudent', loadChildren: './add-student/add-student.module#AddStudentModule' },
            { path: 'addTeacher', loadChildren: './add-teacher/add-teacher.module#AddTeacherModule' },
            { path: 'allStudents', loadChildren: './all-students/all-students.module#AllStudentsModule' },
            { path: 'allTeachers', loadChildren: './all-teachers/all-teachers.module#AllTeachersModule' },
            { path: 'bookRoom', loadChildren: './book-room/book-room.module#BookRoomModule' },
            { path: 'userInfo', loadChildren: './personal-info/personal-info.module#PersonalInfoModule' },
            { path: 'message', loadChildren: './message-headmaster/message-headmaster.module#MessageHeadmasterModule' },
            { path: 'enterNotes', loadChildren: './enter-notes/enter-notes.module#EnterNotesModule' },
            { path: 'viewPlanning', loadChildren: './view-planning/view-planning.module#ViewPlanningModule' },
            { path: 'requestModifyPlanning',
              loadChildren: './request-modify-planning/request-modify-planning.module#RequestModifyPlanningModule' },

        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
