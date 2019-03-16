import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './request-modify-planning.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import {RequestModifyPlanningComponent} from './request-modify-planning.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,

    routing
  ],
  declarations: [
    RequestModifyPlanningComponent
  ]
})
export class RequestModifyPlanningModule { }
