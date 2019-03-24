
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './uploadcourse-teacher.routing';
import { SharedModule } from '../../shared/shared.module';
import { UploadcourseTeacherComponent } from './uploadcourse-teacher.component';
import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        FormsModule
    ],
    declarations: [
        UploadcourseTeacherComponent
    ]
})
export class UploadcourseTeacherModule { }
