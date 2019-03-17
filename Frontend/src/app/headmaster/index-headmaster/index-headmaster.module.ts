import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexHeadmasterComponent } from './index-headmaster.component';
import { routing } from './index-headmaster.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        routing
    ],
    declarations: [
        IndexHeadmasterComponent
    ]
})
export class IndexHeadmasterModule { }
