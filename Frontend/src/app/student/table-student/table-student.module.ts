import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './table-student.routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';

/* components */
import { TableStudentComponent } from './table-student.component';
import { BasicTablesComponent } from './components/basic-tables/basic-tables.component';
import { DataTableComponent } from './components/data-table/data-table.component';

@NgModule({
    imports: [
        NgxPaginationModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule,
        routing
    ],
    declarations: [
        TableStudentComponent,
        BasicTablesComponent,
        DataTableComponent
    ]
})
export class TableStudentModule { }
