import { Component, OnInit, OnDestroy } from '@angular/core';
import { TeacherService } from '../../../services/teacher.service';
import { Teacher } from '../../../utils/types';
import { Subscription } from 'rxjs';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit, OnDestroy {
  private _addTeacherSubscriber: Subscription
  statutAlert: boolean;
  constructor(private teacherService : TeacherService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if (!this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }

  ngOnDestroy(): void {
    if (this._addTeacherSubscriber) {
      this._addTeacherSubscriber.unsubscribe();
    }
  }

  addTeacher(teacher : Teacher){
    console.log('click on add teacher');
    console.log(teacher);
    this._addTeacherSubscriber = this.teacherService.addTeacher(teacher).subscribe(
       newTeacher => {console.error(newTeacher),
        this.router.navigate(['/headmaster/teachs'])}
,       error => {
         this.statutAlert = false;
         console.log(error)
      }
    );
  }
}
