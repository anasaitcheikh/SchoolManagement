import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../services/staff.service';
import { Subscription } from 'rxjs';
import { Staff } from '../../../utils/types';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-staffs',
  templateUrl: './staffs.component.html',
  styleUrls: ['./staffs.component.scss']
})
export class StaffsComponent {
}
