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
  _viewPlanningSubscriber: Subscription;

  days: { [key: string]: number; } = {};
  hours: { [key: string]: number; } = {};
  schedules: string[] = [
    '8h-9h', '9h-10h', '10h-11h', '11h-12h', 
    '12h-12h', '13h-14h', '14h-15h', '15h-16h',
    '16h-17h', '17h-18h', '18h-19h', '19h-20h'];

  myTable: string[][];

  constructor(private TimeTableService : TimeTableService,
              private LoginService: LoginService,
              private classService: ClassService,
              private router: Router) { 
    this.days['MONDAY'] = 0;
    this.days['Tuesday'] = 1;
    this.days['Wednesday'] = 2;
    this.days['Thursday'] = 3;
    this.days['Friday'] = 4;
    this.days['Saturday'] = 5;
    this.days['Sunday'] = 6;

    this.hours['08:00:00'] = 0;
    this.hours['09:00:00'] = 1;
    this.hours['10:00:00'] = 2;
    this.hours['11:00:00'] = 3;
    this.hours['12:00:00'] = 4;
    this.hours['13:00:00'] = 5;
    this.hours['14:00:00'] = 6;
    this.hours['15:00:00'] = 7;
    this.hours['16:00:00'] = 8;
    this.hours['17:00:00'] = 9;
    this.hours['18:00:00'] = 10;
    this.hours['19:00:00'] = 11;
    this.hours['20:00:00'] = 12;

    this.myTable = [];
    for (let i = 0; i < 12; i ++) {
      this.myTable[i] = [];
      for (let j = 0; j < 7; j ++) {
        this.myTable[i][j] = " "
      }
    }
  }

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
      sen => {
        console.log(sen);
        this.edt = JSON.parse(JSON.stringify(sen));
        for (let e of this.edt) {
          if (this.isthis_week(e.date)) {
            const day = this.parse_date(e.date);
            const hour = e.time;
            const indexDay = this.days[day];
            const indexHour = this.hours[hour];

            this.myTable[indexHour][indexDay] = `Subject : ${e.subject.name}
            <br>Classroom : ${e.classroom.roomNumber}
            <br>Teacher : ${e.teacher.lastname}`;
          }
        }
        for (let i = 0; i < 12; i ++) {
          console.log(this.myTable[i]);
        }
      },
      error => console.log(error)
    );

  }
  comparator(time, date, expected_day, expect_time): boolean {
    return this.isthis_week(date) && time == expect_time && this.parse_date(date) == expected_day;
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
    for (let i = 0; i < 12; i ++) {
      this.myTable[i] = [];
      for (let j = 0; j < 7; j ++) {
        this.myTable[i][j] = " "
      }
    }
  
    this.classId= id_class;
    console.log(id_class);
    if(id_class != -1)
      this. getCourses();
  }

}
