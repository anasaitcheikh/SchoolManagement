import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './profile-student.routing';
import { SharedModule } from '../../shared/shared.module';
import { ProfileStudentComponent } from './profile-student.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        ProfileStudentComponent
    ]
})
export class ProfileStudentModule { }
