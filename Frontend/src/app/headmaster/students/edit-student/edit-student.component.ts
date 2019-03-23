import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {StudentService} from '../../../../services/student.service';
import {LoginService} from '../../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Student, Class } from '../../../../utils/types';
import { ClassService } from '../../../../services/class.service';

@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.scss']
})
export class EditStudentComponent implements OnInit, OnDestroy {
  _editStudentSubscriber: Subscription;
  _getStudentSubscriber: Subscription;
  _getClassesSubscriber: Subscription;
  studentId : number;
  firstname : string;
  lastname : string;
  birthDate : string;
  email : string;
  password : string;
  studentClass : number;
  student: Student;

  classes: Class[] = [];

  constructor(private studentService: StudentService,
    private classService: ClassService, 
    private LoginService: LoginService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.studentId  = this.activatedRoute.snapshot.params['id'];
    console.log("studentId", this.studentId);
    this.getStudentById()
    this.getClasses();
  }

  ngOnDestroy(): void {
    if (this._editStudentSubscriber != null) {
      this._editStudentSubscriber.unsubscribe();
    }

    if (this._getStudentSubscriber != null) {
      this._getStudentSubscriber.unsubscribe();
    }
    if (this._getClassesSubscriber != null) {
      this._getClassesSubscriber.unsubscribe();
    }
  }

  editStudent() {
    this.student.firstname=this.firstname;
    this.student.lastname=this.lastname;
    this.student.birthDate=this.birthDate;
    this.student.email=this.email;
    this.student.password=this.password;
    this.student.studentClass=this.studentClass;
    this._editStudentSubscriber = this.studentService.updateStudent(this.student, this.studentId).subscribe(
      newStudent => {
        this.router.navigate(['headmaster/students'])},
      error => {console.log(error);}
    );
  }

  getStudentById() {
    this._getStudentSubscriber = this.studentService.getStudentById(this.studentId).subscribe(
      res => {
        console.log(res)
        this.student = res;
        this.firstname=res.firstname;
        this.lastname=res.lastname;
        this.birthDate=res.birthDate;
        this.email=res.email;
        this.password=res.password;
        this.studentClass=res.studentClass;
      },
      error => console.log(error)
    );
  }

  getClasses(){
    this._getClassesSubscriber = this.classService.getClasses().subscribe(
      classes => {this.classes = classes; console.log("classes", this.classes)},
      error => console.log("error", error)
    )
  }

}
