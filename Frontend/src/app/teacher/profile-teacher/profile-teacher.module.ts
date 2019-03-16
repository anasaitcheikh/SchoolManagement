import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './profile-teacher.routing';
import { SharedModule } from '../../shared/shared.module';
import { ProfileTeacherComponent } from './profile-teacher.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        ProfileTeacherComponent
    ]
})
export class ProfileTeacherModule { }
