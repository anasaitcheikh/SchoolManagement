import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './course-material.routing';
import { SharedModule } from '../../shared/shared.module';
import { CourseMaterialComponent } from './course-material.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing,
    FormsModule
  ],
  declarations: [CourseMaterialComponent]
})
export class CourseMaterialModule { }
