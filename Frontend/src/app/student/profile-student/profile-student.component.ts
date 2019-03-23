import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import {StudentService} from '../../../services/student.service';
import { Subscription } from 'rxjs';
import {ClassService} from '../../../services/class.service';

@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {
  user;
  student;
  firstName;
  lastName;
  email;
  bDate;
  class;
  classId;
  className;
  Subscriber: Subscription;

  constructor(private ClassService : ClassService, private StudentService : StudentService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {

    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.user = JSON.parse(localStorage.getItem('user'));

    this.Subscriber = this.StudentService.getStudentById(this.user.id).subscribe(
      sen => {console.log(sen);
      this.student= JSON.parse(JSON.stringify(sen));
      this.classId = this.student.id_class;
      },
      error => console.log(error)
    );

    this.email=this.user.email;
    this.firstName = this.user.firstname;
    this.lastName = this.user.lastname;
    this.bDate = this.user.birthDate;
    

    this.Subscriber = this.ClassService.getClassById(this.user.id).subscribe(
      sen => {console.log(sen);
      this.class= JSON.parse(JSON.stringify(sen));
      this.className=this.class.name;
      },
      error => console.log(error)
    );

    

    console.log(this.user)
  }

}
