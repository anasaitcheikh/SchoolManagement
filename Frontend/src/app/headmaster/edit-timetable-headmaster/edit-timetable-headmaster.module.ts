import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './edit-timetable-headmaster.routing';
import { SharedModule } from '../../shared/shared.module';
import { EditTimetableHeadmasterComponent } from './edit-timetable-headmaster.component';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [EditTimetableHeadmasterComponent]
})
export class EditTimetableHeadmasterModule { }
