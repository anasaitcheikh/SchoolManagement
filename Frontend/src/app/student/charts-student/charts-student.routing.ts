import { Routes, RouterModule } from '@angular/router';
import { ChartsStudentComponent } from './charts-student.component';
import { EChartsComponent } from './components/echarts/echarts.component';

const childRoutes: Routes = [
    {
        path: '',
        component: ChartsStudentComponent,
        children: [
            { path: '', redirectTo: 'echarts', pathMatch: 'full' },
            { path: 'echarts', component: EChartsComponent },
        ]
    }
];

export const routing = RouterModule.forChild(childRoutes);