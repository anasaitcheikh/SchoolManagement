import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './timetable-student.routing';
import { SharedModule } from '../../shared/shared.module';
import {TimetableStudentComponent} from './timetable-student.component';
@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      routing
  ],
  declarations: [
    TimetableStudentComponent
  ]
})
export class TimetableStudentModule { }
