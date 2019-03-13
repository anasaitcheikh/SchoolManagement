import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTeacherComponent } from './add-teacher.component';
import { routing } from './add-teacher.routing';
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
    AddTeacherComponent
  ]
})
export class AddTeacherModule { }
