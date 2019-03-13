import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './result-student.routing';
import { SharedModule } from '../../shared/shared.module';
import {ResultStudentComponent} from './result-student.component';
@NgModule({
  imports: [
      CommonModule,
      SharedModule,
      routing
  ],
  declarations: [
    ResultStudentComponent
  ]
})

export class ResultStudentModule { }
