import { Routes, RouterModule } from '@angular/router';
import { TableStudentComponent } from './table-student.component';
import { BasicTablesComponent } from './components/basic-tables/basic-tables.component';
import { DataTableComponent } from './components/data-table/data-table.component';

const childRoutes: Routes = [
    {
        path: '',
        component: TableStudentComponent,
        children: [
            { path: '', redirectTo: 'default-tables', pathMatch: 'full' },
            { path: 'basic-tables', component: BasicTablesComponent },
            { path: 'data-table', component: DataTableComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);
