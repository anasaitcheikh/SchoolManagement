import {Component, OnDestroy, OnInit} from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router';
import {TimeTableService} from '../../../services/time-table.service';
import {Course} from '../../../utils/types';
import {Subscription} from 'rxjs/Subscription';
@Component({
  selector: 'app-request-modify-planning',
  templateUrl: './request-modify-planning.component.html',
  styleUrls: ['./request-modify-planning.component.scss']
})
export class RequestModifyPlanningComponent implements OnInit, OnDestroy {

  courses: Course[] = [];
  _getCourseSubscriber: Subscription;
  constructor(private LoginService: LoginService,
              private courseService: TimeTableService,
              private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.getAllCourses();
  }

  ngOnDestroy(): void {
    if (this._getCourseSubscriber) {
      if (this._getCourseSubscriber != null) {
        this._getCourseSubscriber.unsubscribe();
      }
    }
  }


  getAllCourses() {
    this._getCourseSubscriber = this.courseService.getAllCoursesByStatus(false).subscribe(
      courses => { this.courses = courses; console.log('courses: ', this.courses)} ,
      error => console.log(error)
    );
  }

  acceptCourse(idCourse){

  }
  refuseCourse(idCourse){

  }

}
