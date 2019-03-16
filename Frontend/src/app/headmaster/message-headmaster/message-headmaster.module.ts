import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageHeadmasterComponent } from './message-headmaster.component';
import { routing } from './message-headmaster.routing';
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
    MessageHeadmasterComponent
  ]
})
export class MessageHeadmasterModule { }
