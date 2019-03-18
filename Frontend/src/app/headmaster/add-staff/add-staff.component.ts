import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-staff',
  templateUrl: './add-staff.component.html',
  styleUrls: ['./add-staff.component.scss']
})
export class AddStaffComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addStaff(staff) {
    console.log('click on add staff');
    console.log(staff.firstname);
    console.log(staff.lastname);
    console.log(staff.salary);
    console.log(staff.role);

  }

}
