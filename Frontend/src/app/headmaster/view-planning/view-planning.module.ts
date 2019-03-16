import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './view-planning.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import {ViewPlanningComponent} from './view-planning.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing
  ],
  declarations: [
    ViewPlanningComponent
  ]
})
export class ViewPlanningModule { }
