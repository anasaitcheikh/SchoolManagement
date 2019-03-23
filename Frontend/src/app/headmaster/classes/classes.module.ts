import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClassesComponent } from './classes.component';
import { routing } from './classes.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { EditClassComponent } from './edit-class/edit-class.component';
import { AllClassesComponent } from './all-classes/all-classes.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    routing,
    FormsModule
  ],
  declarations: [
    ClassesComponent,
    EditClassComponent,
    AllClassesComponent
  ]
})
export class ClassesModule { }
