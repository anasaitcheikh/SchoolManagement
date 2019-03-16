import { NgModule } from '@angular/core';
import { routing } from './add-student.routing';

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
   routing


  ],
  declarations: [
    AddStudentComponent
  ]
})
export class AddStudentModule { }
