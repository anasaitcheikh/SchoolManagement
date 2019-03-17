import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './update-password-student.routing';
import { SharedModule } from '../../shared/shared.module';
import {UpdatePasswordStudentComponent} from './update-password-student.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      routing,
      FormsModule
  ],
  declarations: [
    UpdatePasswordStudentComponent
  ]
})

export class UpdatePasswordStudentModule { }
