import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { TimeTableService } from '../../../services/time-table.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-edt-teacher',
  templateUrl: './edt-teacher.component.html',
  styleUrls: ['./edt-teacher.component.scss']
})
export class EdtTeacherComponent implements OnInit {
  Subscriber: Subscription;
  edt;
  user;
  constructor(private TimeTableService : TimeTableService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.user = JSON.parse(localStorage.getItem('user'));
    this.getCourses();
  }

  comparator (time, date, expected_day, expect_time) : boolean{
    return this.isthis_week(date) && time ==expect_time && this.parse_date(date)==expected_day;
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

  getCourses(){
    this.Subscriber = this.TimeTableService.getCourseByTeacher(this.user.id) .subscribe(
      sen => {console.log(sen);
      this.edt= JSON.parse(JSON.stringify(sen));
      },
      error => console.log(error)
    );
 
  }

}
