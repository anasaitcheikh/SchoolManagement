import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './all-teachers.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import {AllTeachersComponent} from './all-teachers.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    AllTeachersComponent
  ]
})
export class AllTeachersModule { }
