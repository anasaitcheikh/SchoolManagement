import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './icon-student.routing';
import { SharedModule } from '../../shared/shared.module';
import { IconStudentComponent } from './icon-student.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [
    IconStudentComponent
   ]
})
export class IconStudentModule { }
