import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './edit-edt-teacher.routing';
import { SharedModule } from '../../shared/shared.module';
import { EditEdtTeacherComponent } from './edit-edt-teacher.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    routing
  ],
  declarations: [EditEdtTeacherComponent]
})
export class EditEdtTeacherModule { }
