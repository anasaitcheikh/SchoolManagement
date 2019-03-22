import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-update-password-student',
  templateUrl: './update-password-student.component.html',
  styleUrls: ['./update-password-student.component.scss']
})
export class UpdatePasswordStudentComponent implements OnInit {
  old_p : string;
  new_p : string;
  conf_new : string;
  user;  
  Subscriber: Subscription;

  constructor(private UserService: UserService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.user = JSON.parse(localStorage.getItem('user'));

  }

  change_password(){
    this.Subscriber = this.UserService.reset_password(this.old_p,this.new_p,this.user.id).subscribe(
      sen => console.log(sen),
      error => console.log(error)
    );
  }

}
