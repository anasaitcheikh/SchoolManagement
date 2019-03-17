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
import { HttpClientModule } from '@angular/common/http';

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
      HeadmasterService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
