import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './menu-levels-student.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

/* components */
import { MenuLevelsStudentComponent } from './menu-levels-student.component';
import { Levels2Component } from './components/levels-2/levels-2.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        MenuLevelsStudentComponent,
        Levels2Component
    ]
})
export class MenuLevelsStudentModule { }
