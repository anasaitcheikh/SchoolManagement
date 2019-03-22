import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
import {TimeTableService} from '../../../services/time-table.service';
import {ClassService} from '../../../services/class.service';
import {Class} from '../../../utils/types';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-view-planning',
  templateUrl: './view-planning.component.html',
  styleUrls: ['./view-planning.component.scss']
})
export class ViewPlanningComponent implements OnInit {

  classes: Class[] = [];
  _viewPlanningSubscriber: Subscription
  constructor(private LoginService: LoginService,
              private timeTableService: TimeTableService,
              private classService: ClassService,
              private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.getClasses();
    let d = new Date('2019-03-21');
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    document.getElementById('demo').innerHTML = days[d.getDay()];
  }

  getClasses() {
    this._viewPlanningSubscriber = this.classService.getClasses().subscribe(
      classes => {this.classes = classes; console.log('classes', this.classes)},
      error => console.log('error', error)
    );
  }


}
