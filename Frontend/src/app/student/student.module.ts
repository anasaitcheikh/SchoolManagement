import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './student.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { StudentComponent } from './student.component';
import { MessageStudentComponent } from './message-student/message-student.component';
import { ResultStudentComponent } from './result-student/result-student.component';
import { TimetableStudentComponent } from './timetable-student/timetable-student.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing
    ],
    declarations: [
        StudentComponent,
        ]
})
export class StudentModule { }
