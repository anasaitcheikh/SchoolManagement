import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
import { HeadmasterModule } from './headmaster/headmaster.module';
import { LoginModule } from './login/login.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {UserService} from '../services/user.service';
import {StudentService} from '../services/student.service';
import {TeacherService} from '../services/teacher.service';
import {HeadmasterService} from '../services/headmaster.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from '../services/login.service';
import { TokenInterceptor } from '../interceptors/token.interceptor';
import { TokenService } from '../services/token.service';
import { ClassService } from '../services/class.service';
import {StaffService} from '../services/staff.service';
import {ClassroomService} from '../services/classroom.service';
import {MailService} from '../services/mail.service';
import {SubjectService} from '../services/subject.service';
import {TimeTableService} from '../services/time-table.service';
import { MarkService } from '../services/mark.service';
import { CourseMaterialService } from '../services/courseMaterial.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LoginModule,
    StudentModule,
    TeacherModule,
    HeadmasterModule,
    HttpClientModule,
    routing
  ],
  declarations: [
    AppComponent,
  ],
  providers: [
      UserService,
      StudentService,
      TeacherService,
      HeadmasterService,
      ClassroomService,
      MailService,
      MarkService,
      CourseMaterialService,
      LoginService, 
      {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptor,
        multi: true
      },
      TokenService,
      ClassService,
      StaffService,
      SubjectService,
      TimeTableService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
