import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './student.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { StudentComponent } from './student.component';
import { IndexStudentComponent } from './index-student/index-student.component';
import { IconStudentComponent } from './icon-student/icon-student.component';
import { FormStudentComponent } from './form-student/form-student.component';
import { ChartsStudentComponent } from './charts-student/charts-student.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing
    ],
    declarations: [
        StudentComponent,
        IndexStudentComponent,
        IconStudentComponent,
        FormStudentComponent,
        ChartsStudentComponent
        ]
})
export class StudentModule { }
