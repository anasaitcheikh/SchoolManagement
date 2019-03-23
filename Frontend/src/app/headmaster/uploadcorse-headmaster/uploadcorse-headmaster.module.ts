
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './uploadcorse-headmaster.routing';
import { SharedModule } from '../../shared/shared.module';
import { UploadcorseHeadmasterComponent } from './uploadcorse-headmaster.component';
import { FormsModule } from '@angular/forms'

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        FormsModule
    ],
    declarations: [
      UploadcorseHeadmasterComponent
    ]
})
export class UploadcorseHeadmasterModule { }
