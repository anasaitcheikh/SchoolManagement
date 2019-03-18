import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './view-classes.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import {ViewClassesComponent} from './view-classes.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing
  ],
  declarations: [
    ViewClassesComponent
  ]
})
export class ViewClassesModule { }
