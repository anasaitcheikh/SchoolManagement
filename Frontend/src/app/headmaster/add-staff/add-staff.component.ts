import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {StaffService} from '../../../services/staff.service';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit, OnDestroy {
  _addStaffSubscriber: Subscription;
  constructor(private staffService: StaffService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }

  ngOnDestroy(): void {
    if (this._addStaffSubscriber) {
      this._addStaffSubscriber.unsubscribe();
    }
  }

  addStaff(staff) {
    console.log('click on add staff');
    console.log('staff', staff);
    this._addStaffSubscriber = this.staffService.addStaff(staff).subscribe(
      newStaff => {
                 this.router.navigate(['/headmaster/staffs'])},
      error => console.log(error)
    );
  }

}
