import { Routes, RouterModule } from '@angular/router';

import {BookRoomComponent} from './book-room.component';


const childRoutes: Routes = [
  {
    path: '',
    component: BookRoomComponent
  }
];

export const routing = RouterModule.forChild(childRoutes)
