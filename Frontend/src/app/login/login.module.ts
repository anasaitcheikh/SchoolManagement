import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        FormsModule
    ],
    declarations: [
        LoginComponent
        ]
})
export class LoginModule { }
