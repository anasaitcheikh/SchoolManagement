import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './teacher.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { TeacherComponent } from './teacher.component';


@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing
    ],
    declarations: [
        TeacherComponent,
    ]
})
export class TeacherModule { }
