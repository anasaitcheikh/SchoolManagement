import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStudentTeacherComponent } from './list-student-teacher.component';
import { routing } from './list-student-teacher.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing
  ],
  declarations: [
    ListStudentTeacherComponent,
  ]
})
export class ListStudentTeacherModule { }
