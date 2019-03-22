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

  getCourses(){
    this.Subscriber = this.TimeTableService.getCourseByTeacher(this.user.id) .subscribe(
      sen => {console.log(sen);
      this.edt= JSON.parse(JSON.stringify(sen));
      },
      error => console.log(error)
    );
 
  }

}
