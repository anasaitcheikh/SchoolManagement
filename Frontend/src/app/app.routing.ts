import { Routes, RouterModule } from '@angular/router';
//import { StudentComponent } from './student/student.component';
//import { TeacherComponent } from './teacher/teacher.component';
import { HeadmasterComponent } from './headmaster/headmaster.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'login'
  }
];

export const routing = RouterModule.forRoot(appRoutes);
