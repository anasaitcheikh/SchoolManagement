import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './edt-teacher.routing';
import { SharedModule } from '../../shared/shared.module';
import { EdtTeacherComponent } from './edt-teacher.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [EdtTeacherComponent]
})
export class EdtTeacherModule { }
