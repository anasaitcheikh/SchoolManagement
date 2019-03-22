import { Component, OnInit } from '@angular/core';
import { StaffService } from '../../../../services/staff.service';
import { Subscription } from 'rxjs';
import { Staff } from '../../../../utils/types';
import {LoginService} from '../../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-all-staff',
  templateUrl: './all-staff.component.html',
  styleUrls: ['./all-staff.component.scss']
})
export class AllStaffComponent implements OnInit {
  private _allStaffsSubscriber: Subscription;
  Json;
  staff : Staff[];

  constructor(private staffService: StaffService, 
    private LoginService: LoginService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.LoginService.is_loggedin()){
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
        this.Json = JSON.parse(JSON.stringify(res));
        this.staff = this.Json;
      },
      error => console.log(error)
   )
  }
}
