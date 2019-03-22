import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {StaffService} from '../../../services/staff.service';
import {LoginService} from '../../../services/login.service';
import { Router,ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-edit-staff',
  templateUrl: './edit-staff.component.html',
  styleUrls: ['./edit-staff.component.scss']
})
export class EditStaffComponent implements OnInit, OnDestroy {
  _editStaffSubscriber: Subscription;
  staff_id : number;

  constructor(private staffService: StaffService, private LoginService: LoginService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.staff_id = this.route.snapshot.params['id'];
    console.log(this.staff_id);
  }

  ngOnDestroy(): void {
    if (this._editStaffSubscriber) {
      this._editStaffSubscriber.unsubscribe();
    }
  }

  editStaff(staff) {
    console.error('edit staff', staff);
    this._editStaffSubscriber = this.staffService.updateStaff(staff,this.staff_id).subscribe(
      newStaff => console.log(newStaff),
      error => console.log(error)
    );
  }

}
