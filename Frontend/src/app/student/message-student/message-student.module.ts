import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './message-student.routing';
import { SharedModule } from '../../shared/shared.module';
import { MessageStudentComponent } from './message-student.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [MessageStudentComponent]
})
export class MessageStudentModule { }
