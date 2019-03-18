import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllStaffsComponent } from './all-staffs.component';
import { routing } from './all-staffs.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing
  ],
  declarations: [
    AllStaffsComponent
  ]
})
export class AllStaffsModule { }
