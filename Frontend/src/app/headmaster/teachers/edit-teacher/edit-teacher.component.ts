import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {TeacherService} from '../../../../services/teacher.service';
import {LoginService} from '../../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Teacher } from '../../../../utils/types';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent implements OnInit, OnDestroy {
  _editTeacherSubscriber: Subscription;
  _getTeacherSubscriber: Subscription;
  teacherId : number;
  firstname : string;
  lastname : string;
  email : string;
  password : string;
  birthDate : string;
  specialty : string;
  teacher: Teacher;

  constructor(private teacherService: TeacherService, 
    private LoginService: LoginService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    if (!this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.teacherId  = this.activatedRoute.snapshot.params['id'];
    console.log("teacherId", this.teacherId);
    this.getTeacherById()
  }
  ngOnDestroy(): void {
    if (this._editTeacherSubscriber != null) {
      this._editTeacherSubscriber.unsubscribe();
    }

    if (this._getTeacherSubscriber != null) {
      this._getTeacherSubscriber.unsubscribe();
    }
  }

  editTeacher() {
    this.teacher.firstname=this.firstname;
    this.teacher.lastname=this.lastname;
    this.teacher.email=this.email;
    this.teacher.password=this.password;
    this.teacher.birthDate=this.birthDate;
    this.teacher.specialty=this.specialty;
    this._editTeacherSubscriber = this.teacherService.updateTeacher(this.teacher, this.teacherId).subscribe(
      newTeacher => {
        this.router.navigate(['headmaster/teachers'])},
      error => {console.log(error);}
    );
  }

  getTeacherById() {
    this._getTeacherSubscriber = this.teacherService.getTeacherById(this.teacherId).subscribe(
      res => {
        console.log(res)
        this.teacher = res;
        this.firstname=res.firstname;
        this.lastname=res.lastname;
        this.email=res.email;
        this.password=res.password;
        this.birthDate=res.birthDate;
        this.specialty=res.specialty;
      },
      error => console.log(error)
    );
  }
}
