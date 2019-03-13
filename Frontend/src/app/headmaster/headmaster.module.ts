import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './headmaster.routing';

import { LayoutModule } from '../shared/layout.module';
import { SharedModule } from '../shared/shared.module';

/* components */
import { HeadmasterComponent } from './headmaster.component';



@NgModule({
    imports: [
        CommonModule,
        LayoutModule,
        SharedModule,
      //CUSTOM_ELEMENTS_SCHEMA,
        routing
    ],
    declarations: [
        HeadmasterComponent,
    ]
})
export class HeadmasterModule { }
