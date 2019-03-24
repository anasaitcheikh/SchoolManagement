import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeachersComponent } from './teachers.component';
import { routing } from './teachers.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { EditTeacherComponent } from './edit-teacher/edit-teacher.component';
import { AllTeachersComponent } from './all-teachers/all-teachers.component';
import { ShowClassesComponent } from './show-classes/show-classes.component';
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
    TeachersComponent,
    EditTeacherComponent,
    AllTeachersComponent,
    ShowClassesComponent
  ]
})
export class TeachersModule { }
