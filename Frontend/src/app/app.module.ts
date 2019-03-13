import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HeadmasterModule } from './headmaster/headmaster.module';
import { LoginModule } from './login/login.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {IndexHeadmasterModule} from './headmaster/index-headmaster/index-headmaster.module';
import {AddStudentModule} from './headmaster/add-student/add-student.module';
import {AddTeacherModule} from './headmaster/add-teacher/add-teacher.module';
import {AllStudentsModule} from './headmaster/all-students/all-students.module';
import {BookRoomModule} from './headmaster/book-room/book-room.module';
import {PersonalInfoModule} from './headmaster/personal-info/personal-info.module';


@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LoginModule,
    IndexHeadmasterModule,
    AddStudentModule,
    AddTeacherModule,
    AllStudentsModule,
    HeadmasterModule,
    BookRoomModule,
    PersonalInfoModule,
    routing
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
