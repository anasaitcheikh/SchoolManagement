import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './add-class.routing';
import { SharedModule } from '../../shared/shared.module';
import { AddClassComponent } from './add-class.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    routing
  ],
  declarations: [AddClassComponent]
})
export class AddClassModule { }
