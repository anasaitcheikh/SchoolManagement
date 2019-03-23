import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../services/staff.service';
import { Subscription } from 'rxjs';
import { Staff } from '../../../utils/types';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent {
}
