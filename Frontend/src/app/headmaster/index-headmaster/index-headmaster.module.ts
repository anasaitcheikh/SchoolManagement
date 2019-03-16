import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexHeadmasterComponent } from './index-headmaster.component';
import { routing } from './index-headmaster.routing';
import { SharedModule } from '../../shared/shared.module';
import { NgxEchartsModule } from 'ngx-echarts';
import { RouterModule, Routes} from '@angular/router';
import {AddStudentComponent} from '../add-student/add-student.component';
import {AddStudentModule} from '../add-student/add-student.module';

//const routes: Routes = [
  //{ path: '/test', component:  AddStudentComponent},

  //]

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        NgxEchartsModule,
        //AddStudentModule,
        //RouterModule.forRoot(routes),
        routing
    ],
    declarations: [
        IndexHeadmasterComponent
    ]
})
export class IndexHeadmasterModule { }
