import { NgModule } from '@angular/core';
import { routing } from './add-staff.routing';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
/* components */
import { AddStaffComponent } from './add-staff.component';
import {CommonModule} from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {NgxEchartsModule} from 'ngx-echarts';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    FormsModule,
    ReactiveFormsModule,
    routing


  ],
  declarations: [
    AddStaffComponent
  ]
})
export class AddStaffModule { }
