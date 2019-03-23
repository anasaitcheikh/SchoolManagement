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
  firstname : string;
  lastname : string;
  salary : number;
  role : string;
  staff: Staff;

  constructor(private staffService: StaffService, 
    private LoginService: LoginService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.staffId  = this.activatedRoute.snapshot.params['id'];
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

  editStaff() {
    this.staff.firstname=this.firstname;
    this.staff.lastname=this.lastname;
    this.staff.salary=this.salary;
    this.staff.role=this.role;
    this._editStaffSubscriber = this.staffService.updateStaff(this.staff, this.staffId).subscribe(
      newStaff => {
        this.router.navigate(['headmaster/staffs'])},
      error => {console.log(error);}
    );
  }

  getStaffById() {
    this._getStaffSubscriber = this.staffService.getStaffById(this.staffId).subscribe(
      res => {
        console.log(res)
        this.staff = res;
        this.firstname=res.firstname;
        this.lastname=res.lastname;
        this.salary=res.salary;
        this.role=res.role;
      },
      error => console.log(error)
    );
  }

}
