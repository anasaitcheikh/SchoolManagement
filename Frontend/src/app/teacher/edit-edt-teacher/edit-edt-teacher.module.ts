import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './edit-edt-teacher.routing';
import { SharedModule } from '../../shared/shared.module';
import { EditEdtTeacherComponent } from './edit-edt-teacher.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [EditEdtTeacherComponent]
})
export class EditEdtTeacherModule { }
