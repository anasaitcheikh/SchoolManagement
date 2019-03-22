import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './profile-teacher.routing';
import { SharedModule } from '../../shared/shared.module';
import { ProfileTeacherComponent } from './profile-teacher.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        FormsModule
    ],
    declarations: [
        ProfileTeacherComponent
    ]
})
export class ProfileTeacherModule { }
