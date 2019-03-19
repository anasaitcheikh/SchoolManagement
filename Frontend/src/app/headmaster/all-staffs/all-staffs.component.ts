import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../services/staff.service';
import { Subscription } from 'rxjs';
import { Staff } from '../../../utils/types';

@Component({
  selector: 'app-all-staffs',
  templateUrl: './all-staffs.component.html',
  styleUrls: ['./all-staffs.component.scss']
})
export class AllStaffsComponent implements OnInit {
  private _allStaffsSubscriber: Subscription;
  Json
  staff : Staff 

  constructor(private staffService: StaffService) { }

  ngOnInit() {
    this.allstaffs();
  }

  ngOnDestroy(): void {
    if (this._allStaffsSubscriber){
      this._allStaffsSubscriber.unsubscribe();
    }
  }

  allstaffs(){
    this._allStaffsSubscriber = this.staffService.getStaffs().subscribe(
      res => {
        this.Json =JSON.parse(JSON.stringify(res));
        this.staff.firstname =this.Json.firstname;
        this.staff.lastname = this.Json.lastname;
        this.staff.role = this.Json.role;
        this.staff.salary = this.Json.salary;
      },
      error => console.log(error)
   )
  }
}
