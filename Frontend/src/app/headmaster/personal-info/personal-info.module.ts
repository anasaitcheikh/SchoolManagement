import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './personal-info.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import {PersonalInfoComponent} from './personal-info.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing,
    FormsModule
  ],
  declarations: [
    PersonalInfoComponent
  ]
})
export class PersonalInfoModule { }
