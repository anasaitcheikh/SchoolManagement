import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {StaffService} from '../../../../services/staff.service';
import {LoginService} from '../../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Staff } from '../../../../utils/types';
@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit, OnDestroy {
  _editStaffSubscriber: Subscription;
  _getStaffSubscriber: Subscription;
  staffId : number;
  staff: Staff;

  constructor(private staffService: StaffService, 
    private LoginService: LoginService, 
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (!this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.staffId  = this.route.snapshot.params['id'];
    console.log("staffId", this.staffId);
    this.getStaffById()
  }

  ngOnDestroy(): void {
    if (this._editStaffSubscriber != null) {
      this._editStaffSubscriber.unsubscribe();
    }

    if (this._getStaffSubscriber != null) {
      this._getStaffSubscriber.unsubscribe();
    }
  }

  editStaff(staff) {
    console.error('edit staff', this.staffId);
    this._editStaffSubscriber = this.staffService.updateStaff(staff, this.staffId).subscribe(
      newStaff => console.log(newStaff),
      error => console.log(error)
    );
  }

  getStaffById() {
    this._getStaffSubscriber = this.staffService.getStaffById(this.staffId).subscribe(
      staff => {
        console.log(staff)
        this.staff = staff
      },
      error => console.log(error)
    );
  }

}
