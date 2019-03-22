import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaffsComponent } from './staffs.component';
import { routing } from './staffs.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { EditStaffComponent } from './edit-staff/edit-staff.component';
import { AllStaffComponent } from './all-staff/all-staff.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing,
    FormsModule
  ],
  declarations: [
    StaffsComponent,
    EditStaffComponent,
    AllStaffComponent
  ]
})
export class StaffsModule { }
