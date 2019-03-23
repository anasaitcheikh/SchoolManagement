import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import {TeacherService} from '../../../services/teacher.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-profile-teacher',
  templateUrl: './profile-teacher.component.html',
  styleUrls: ['./profile-teacher.component.scss']
})
export class ProfileTeacherComponent implements OnInit {
  user;
  teacher;
  firstName;
  lastName;
  email;
  bDate;
  specialty;
  Subscriber: Subscription;

  constructor(private TeacherService: TeacherService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.user = JSON.parse(localStorage.getItem('user'));

    this.Subscriber = this.TeacherService.getTeacherById(this.user.id).subscribe(
      sen => {console.log(sen);
      this.teacher= JSON.parse(JSON.stringify(sen));
      this.specialty = this.teacher.specialty;
      },
      error => console.log(error)
    );

    this.email=this.user.email;
    this.firstName = this.user.firstname;
    this.lastName = this.user.lastname;
    this.bDate = this.user.birthDate;
    
    console.log(this.user) 
  }


}
