import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { routing } from './editor-student.routing';
import { SharedModule } from '../../shared/shared.module';
import { EditorStudentComponent } from './editor-student.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    routing
  ],
  declarations: [EditorStudentComponent]
})
export class EditorStudentModule { }
