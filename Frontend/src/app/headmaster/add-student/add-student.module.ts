import { NgModule } from '@angular/core';
import { routing } from './add-student.routing';

/* components */
import { AddStudentComponent } from './add-student.component';


@NgModule({
  imports: [

   routing


  ],
  declarations: [
    AddStudentComponent
  ]
})
export class AddStudentModule { }
