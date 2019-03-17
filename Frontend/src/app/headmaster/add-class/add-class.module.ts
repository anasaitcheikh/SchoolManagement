import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './add-class.routing';
import { SharedModule } from '../../shared/shared.module';
import { AddClassComponent } from './add-class.component';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    routing
  ],
  declarations: [AddClassComponent]
})
export class AddClassModule { }
