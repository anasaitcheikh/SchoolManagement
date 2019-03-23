import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {TeacherService} from '../../../../services/teacher.service';
import {LoginService} from '../../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Teacher, Class } from '../../../../utils/types';
import { ClassService } from '../../../../services/class.service';

@Component({
  selector: 'app-edit-teacher',
  templateUrl: './edit-teacher.component.html',
  styleUrls: ['./edit-teacher.component.scss']
})
export class EditTeacherComponent implements OnInit, OnDestroy {
  _editTeacherSubscriber: Subscription;
  _getTeacherSubscriber: Subscription;
  _getClassesSubscriber: Subscription;
  teacherId : number;
  firstname : string;
  lastname : string;
  birthDate : string;
  email : string;
  password : string;
  specialty : string;
  teacher: Teacher;

  classes: Class[] = [];

  constructor(private teacherService: TeacherService,
    private classService: ClassService, 
    private LoginService: LoginService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

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
    if (this._getClassesSubscriber != null) {
      this._getClassesSubscriber.unsubscribe();
    }
  }

  editTeacher() {
    this.teacher.firstname=this.firstname;
    this.teacher.lastname=this.lastname;
    this.teacher.birthDate=this.birthDate;
    this.teacher.email=this.email;
    this.teacher.password=this.password;
    console.error("edit teacher object",this.teacher);
    this._editTeacherSubscriber = this.teacherService.updateTeacher(this.teacher, this.teacherId).subscribe(
      newTeacher => {
        this.router.navigate(['headmaster/teachs'])},
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
        this.birthDate=res.birthDate;
        this.email=res.email;
        this.password=res.password;
        this.specialty=res.specialty;
      },
      error => console.log(error)
    );
  }

 

}
