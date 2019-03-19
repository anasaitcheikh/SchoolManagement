import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {StaffService} from '../../../services/staff.service';
@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit, OnDestroy {
  _addStaffSubscriber: Subscription;
  constructor(private staffService: StaffService) { }

  ngOnInit() {
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
      newStaff => console.log(newStaff),
      error => console.log(error)
    );
  }

}
