import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './view-classrooms.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import {ViewClassroomsComponent} from './view-classrooms.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing
  ],
  declarations: [
    ViewClassroomsComponent
  ]
})
export class ViewClassroomsModule { }
