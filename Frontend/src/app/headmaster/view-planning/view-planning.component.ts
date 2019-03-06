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
  Subscriber: Subscription;
  is_done=false;
  edt;
  user;
  classId: number;
  classes: Class[] = [];
  _viewPlanningSubscriber: Subscription
  constructor(private TimeTableService : TimeTableService,
              private LoginService: LoginService,
              private timeTableService: TimeTableService,
              private classService: ClassService,
              private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.getClasses();
  }

  getClasses() {
    this._viewPlanningSubscriber = this.classService.getClasses().subscribe(
      classes => {this.classes = classes; console.log('classes', this.classes)},
      error => console.log('error', error)
    );
  }

  getCourses(){
    this.Subscriber = this.TimeTableService.getCoursesByClassId(this.classId) .subscribe(
      sen => {console.log(sen);
      this.edt= JSON.parse(JSON.stringify(sen));
      },
      error => console.log(error)
    );
 
  }

  comparator (time, date, expected_day, expect_time) : boolean{
    if(this.isthis_week(date) && time ==expect_time && this.parse_date(date)==expected_day)
      {   this.is_done= true;
            return true;
      }
      return false;
  }

isthis_week(date) {
  let curr = new Date;
  let week = [];
  for (let i = 1; i <= 7; i++) {
    let first = curr.getDate() - curr.getDay() + i 
    let day = new Date(curr.setDate(first)).toISOString().slice(0, 10)
    week.push(day)
}
  return week.includes(date);
}

  parse_date(date){
    let d = new Date(date);
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days[d.getDay()];
  }

  show_edt(id_class){
    this.classId= id_class;
    console.log(id_class);
    if(id_class != -1)
      this. getCourses();
  }

}
