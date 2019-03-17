import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './message-student.routing';
import { SharedModule } from '../../shared/shared.module';
import { MessageStudentComponent } from './message-student.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule
  ],
  declarations: [MessageStudentComponent]
})
export class MessageStudentModule { }
