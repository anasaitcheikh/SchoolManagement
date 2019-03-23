import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import { StudentService} from '../../../services/student.service';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router';
import {ClassService} from '../../../services/class.service';
import { Class } from '../../../utils/types';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit, OnDestroy {

  classes: Class[] = [];
  statutAlert: boolean;
  _addStudentSubscriber: Subscription;
  constructor(private studentService: StudentService,
              private classService: ClassService, 
              private LoginService: LoginService, 
              private router: Router) { }


  ngOnInit() {
    if (! this.LoginService.is_loggedin()) {
      this.router.navigate(['login']);
    }
    this.getClasses();
  }

  ngOnDestroy(): void {
    if (this._addStudentSubscriber) {
      if (this._addStudentSubscriber != null) {
      this._addStudentSubscriber.unsubscribe();
      }
    }
  }


  addStudent(student) {
    console.log('click on add student');
    console.log('student', student);

    let studentClass;

    if (student.studentClass == -1) {
      delete student.studentClass;
    }
    else {
      studentClass = {
        id : student.studentClass
      }
      student.studentClass = studentClass;
    }

    this._addStudentSubscriber = this.studentService.addStudent(student).subscribe(
      newStudent => {
        this.statutAlert = true;
        console.log('add student successfull', newStudent),
      this.router.navigate(['/headmaster/studs']) },
      error => {
        this.statutAlert = false;
        console.log(error);
      }
    );
  }

  getClasses(){
    this._addStudentSubscriber = this.classService.getClasses().subscribe(
      classes => {this.classes = classes; console.log("classes", this.classes)},
      error => console.log("error", error)
    )
  }
}
