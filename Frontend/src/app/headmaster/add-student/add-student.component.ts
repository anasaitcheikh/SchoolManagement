import {Component, OnDestroy, OnInit} from '@angular/core';
import {HeadmasterService} from '../../../services/headmaster.service';
import {Subscription} from 'rxjs/Subscription';
import { StudentService} from '../../../services/student.service';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit, OnDestroy {

  _addStudentSubscriber: Subscription;
  constructor(private studentService: StudentService,
              private headmasterService: HeadmasterService, private LoginService: LoginService, private router: Router) { }


  ngOnInit() {
    if (! this.LoginService.is_loggedin()) {
      this.router.navigate(['login']);
    }
  }

  ngOnDestroy(): void {
    if (this._addStudentSubscriber) {
      this._addStudentSubscriber.unsubscribe();
    }
  }


  addStudent(student) {
    console.log('click on add staff');
    console.log('staff', student);
    this._addStudentSubscriber = this.studentService.addStudent(student).subscribe(
      newStudent => console.log(newStudent),
      error => console.log(error)
    );
  }
}
