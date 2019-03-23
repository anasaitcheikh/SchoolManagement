import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { routing } from './teachers.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { AllTeachersComponent } from './all-teachers/all-teachers.component'

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
    TeachersComponent,
    EditTeacherComponent,
    AllTeachersComponent
  ]
})
export class TeachersModule { }
