import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexStudentComponent } from './index-student.component';
import { routing } from './index-student.routing';
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
    IndexStudentComponent
  ]
})
export class IndexStudentModule { }
