import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListClassesTeacherComponent } from './list-classes-teacher.component';
import { routing } from './list-classes-teacher.routing';
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
    ListClassesTeacherComponent,
  ]
})
export class ListClassesTeacherModule { }
