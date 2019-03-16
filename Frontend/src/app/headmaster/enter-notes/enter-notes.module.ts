import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './enter-notes.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import {EnterNotesComponent} from './enter-notes.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,

    routing
  ],
  declarations: [
    EnterNotesComponent
  ]
})
export class EnterNotesModule { }
