
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './uploadcorse-headmaster.routing';
import { SharedModule } from '../../shared/shared.module';
import { UploadcorseHeadmasterComponent } from './uploadcorse-headmaster.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
      UploadcorseHeadmasterComponent
    ]
})
export class UploadcorseHeadmasterModule { }
