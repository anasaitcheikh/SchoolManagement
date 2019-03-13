import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './update-password-teacher.routing';
import { SharedModule } from '../../shared/shared.module';
import {UpdatePasswordTeacherComponent} from './update-password-teacher.component';
@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      routing
  ],
  declarations: [
    UpdatePasswordTeacherComponent
  ]
})

export class UpdatePasswordTeacherModule { }
