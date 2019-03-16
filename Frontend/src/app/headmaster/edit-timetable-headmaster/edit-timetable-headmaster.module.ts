import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './edit-timetable-headmaster.routing';
import { SharedModule } from '../../shared/shared.module';
import { EditTimetableHeadmasterComponent } from './edit-timetable-headmaster.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [EditTimetableHeadmasterComponent]
})
export class EditTimetableHeadmasterModule { }
