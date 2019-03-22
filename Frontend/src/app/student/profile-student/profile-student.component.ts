import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-profile-student',
  templateUrl: './profile-student.component.html',
  styleUrls: ['./profile-student.component.scss']
})
export class ProfileStudentComponent implements OnInit {
  user;
  firstName;
  lastName;
  email;
  bDate;
  
  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {

    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.user = JSON.parse(localStorage.getItem('user'));
    this.email=this.user.email;
    this.firstName = this.user.firstname;
    this.lastName = this.user.lastname;
    this.bDate = this.user.birthDate;
    console.log(this.user)
  }

}
