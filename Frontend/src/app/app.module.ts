import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { StudentModule } from './student/student.module';
import { TeacherModule } from './teacher/teacher.module';
//import { HeadmasterModule } from './headmaster/headmaster.module';
import { LoginModule } from './login/login.module';
import { routing } from './app.routing';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    LoginModule,
    StudentModule,
    TeacherModule,
//    HeadmasterModule,
    routing
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
