import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { routing } from './charts-student.routing';
import { NgxEchartsModule } from 'ngx-echarts';

/* components */
import { ChartsStudentComponent } from './charts-student.component';
import { EChartsComponent } from './components/echarts/echarts.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        routing
    ],
    declarations: [
        ChartsStudentComponent,
        EChartsComponent
    ]
})
export class ChartsStudentModule { }
