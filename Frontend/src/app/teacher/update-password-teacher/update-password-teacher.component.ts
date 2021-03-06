import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {UserService} from '../../../services/user.service';
@Component({
  selector: 'app-update-password-teacher',
  templateUrl: './update-password-teacher.component.html',
  styleUrls: ['./update-password-teacher.component.scss']
})
export class UpdatePasswordTeacherComponent implements OnInit {
  old_p : string;
  new_p : string;
  confirm : string;
  statutAlert: boolean;
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
    if(this.new_p == this.confirm){
    this.Subscriber = this.UserService.reset_password(this.old_p,this.new_p,this.user.id).subscribe(
      sen => {
        this.statutAlert = true;
        window.location.reload(true);
        console.log(sen);
      },
      error => {
        this.statutAlert = false;
        console.log(error);
      }
    );
  }else {
  this.statutAlert = false;
}
}

}
