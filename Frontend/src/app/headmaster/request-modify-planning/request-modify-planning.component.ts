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
  _courseSubscriber: Subscription;
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
    if (this. _courseSubscriber) {
      if (this. _courseSubscriber != null) {
        this. _courseSubscriber.unsubscribe();
      }
    }
  }


  getAllCourses() {
    this. _courseSubscriber = this.courseService.getAllCoursesByStatus(false).subscribe(
      courses => { this.courses = courses; console.log('courses: ', this.courses)} ,
      error => console.log(error)
    );
  }

  acceptCourse(idCourse) {
    console.log('course id', idCourse);
    this._courseSubscriber = this.courseService.updateCourseStatusById(idCourse, true).subscribe(
      _ => {
        console.log('success');
        window.location.reload(true);
      },
      error => console.log(error)
    );
   }

  refuseCourse(idCourse) {
    this._courseSubscriber = this.courseService.deleteCourseById(idCourse).subscribe(
       _ => {console.log('success'); window.location.reload(true);},
       error => console.log(error)
     );
  }

}
