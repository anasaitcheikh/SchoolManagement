import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { LoginComponent } from './login.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        
    ],
    declarations: [
        LoginComponent
        ]
})
export class LoginModule { }
