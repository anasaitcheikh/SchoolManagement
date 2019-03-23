import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentsComponent } from './students.component';
import { routing } from './students.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing,
    FormsModule
  ],
  declarations: [
    StudentsComponent,
    EditStudentComponent,
    AllStudentsComponent
  ]
})
export class StudentsModule { }
