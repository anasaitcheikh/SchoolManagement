import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageHeadmasterComponent } from './message-headmaster.component';
import { routing } from './message-headmaster.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    FormsModule,
    routing
  ],
  declarations: [
    MessageHeadmasterComponent
  ]
})
export class MessageHeadmasterModule { }
