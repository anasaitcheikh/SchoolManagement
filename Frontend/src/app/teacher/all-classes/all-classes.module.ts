import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClassesTeacherComponent } from './list-classes-teacher/list-classes-teacher.component';
import { AllStudentsComponent } from './all-students/all-students.component';
import { AllClassesComponent } from './all-classes.component';
import { routing } from './all-classes.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing,
    FormsModule

  ],
  declarations: [
    AllClassesComponent,
    ListClassesTeacherComponent,
    AllStudentsComponent
  ]
})
export class AllClassesModule { }
