import { NgModule } from '@angular/core';
import { routing } from './add-student.routing';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
/* components */
import { AddStudentComponent } from './add-student.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {NgxEchartsModule} from 'ngx-echarts';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule,
    routing


  ],
  declarations: [
    AddStudentComponent
  ]
})
export class AddStudentModule { }
