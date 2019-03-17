import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './saisirnotes-teacher.routing';
import { SharedModule } from '../../shared/shared.module';
import { SaisirnotesTeacherComponent } from './saisirnotes-teacher.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    routing
  ],
  declarations: [SaisirnotesTeacherComponent]
})
export class SaisirnotesTeacherModule { }
