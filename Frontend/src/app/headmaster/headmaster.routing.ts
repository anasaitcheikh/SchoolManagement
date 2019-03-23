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
            { path: 'addClass', loadChildren: './add-class/add-class.module#AddClassModule' },
            { path: 'addStudent', loadChildren: './add-student/add-student.module#AddStudentModule' },
            { path: 'addTeacher', loadChildren: './add-teacher/add-teacher.module#AddTeacherModule' },
            { path: 'addStaff', loadChildren: './add-staff/add-staff.module#AddStaffModule' },
            { path: 'allStudents', loadChildren: './all-students/all-students.module#AllStudentsModule' },
            { path: 'allTeachers', loadChildren: './all-teachers/all-teachers.module#AllTeachersModule' },
            { path: 'studs', loadChildren: './students/students.module#StudentsModule' },
            { path: 'staffs', loadChildren: './staffs/staffs.module#StaffsModule' },
            { path: 'classes', loadChildren: './classes/classes.module#ClassesModule' },
            { path: 'bookRoom', loadChildren: './book-room/book-room.module#BookRoomModule' },
            { path: 'userInfo', loadChildren: './personal-info/personal-info.module#PersonalInfoModule' },
            { path: 'message', loadChildren: './message-headmaster/message-headmaster.module#MessageHeadmasterModule' },
            { path: 'enterNotes', loadChildren: './enter-notes/enter-notes.module#EnterNotesModule' },
            { path: 'viewPlanning', loadChildren: './view-planning/view-planning.module#ViewPlanningModule' },
            { path: 'viewClasses', loadChildren: './view-classes/view-classes.module#ViewClassesModule' },
            { path: 'viewClassrooms', loadChildren: './view-classrooms/view-classrooms.module#ViewClassroomsModule' },
            { path: 'requestModifyPlanning',loadChildren: './request-modify-planning/request-modify-planning.module#RequestModifyPlanningModule' },
            { path: 'uploadcorse', loadChildren: './uploadcorse-headmaster/uploadcorse-headmaster.module#UploadcorseHeadmasterModule' },
            { path: 'timetable-edit',loadChildren: './edit-timetable-headmaster/edit-timetable-headmaster.module#EditTimetableHeadmasterModule' },

        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
