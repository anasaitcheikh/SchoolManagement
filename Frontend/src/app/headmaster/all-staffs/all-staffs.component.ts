import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../services/staff.service';
import { Subscription } from 'rxjs';
import { Staff } from '../../../utils/types';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-all-staffs',
  templateUrl: './all-staffs.component.html',
  styleUrls: ['./all-staffs.component.scss']
})
export class AllStaffsComponent implements OnInit {
  private _allStaffsSubscriber: Subscription;
  Json;
  staff : Staff[];

  constructor(private staffService: StaffService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
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
        this.staff=this.Json;
      },
      error => console.log(error)
   )
  }
}
