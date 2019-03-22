import { NgModule } from '@angular/core';
import { routing } from './edit-staff.routing';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
/* components */
import { EditStaffComponent } from './edit-staff.component';
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
    EditStaffComponent
  ]
})
export class EditStaffModule { }
