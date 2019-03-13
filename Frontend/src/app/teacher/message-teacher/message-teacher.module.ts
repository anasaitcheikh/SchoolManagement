import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './message-teacher.routing';
import { SharedModule } from '../../shared/shared.module';
import { MessageTeacherComponent } from './message-teacher.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [MessageTeacherComponent]
})
export class MessageTeacherModule { }
