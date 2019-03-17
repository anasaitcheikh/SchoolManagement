import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './book-room.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import {BookRoomComponent} from './book-room.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    NgxEchartsModule,
    FormsModule,
    routing
  ],
  declarations: [
    BookRoomComponent
  ]
})
export class BookRoomModule { }
