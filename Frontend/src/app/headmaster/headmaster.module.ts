import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './headmaster.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { HeadmasterComponent } from './headmaster.component';
import { ClassesComponent } from './classes/classes.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
        routing
    ],
    declarations: [
        HeadmasterComponent,
        ClassesComponent,
        
    ]
})
export class HeadmasterModule { }
