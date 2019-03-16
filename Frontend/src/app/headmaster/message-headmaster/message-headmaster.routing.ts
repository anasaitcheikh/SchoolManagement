import { Routes, RouterModule } from '@angular/router';
import {MessageHeadmasterComponent} from './message-headmaster.component';

const childRoutes: Routes = [
  {
    path: '',
    component: MessageHeadmasterComponent
  }
];

export const routing = RouterModule.forChild(childRoutes);
