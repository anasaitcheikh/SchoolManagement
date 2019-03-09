import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
import {UserService} from '../../../services/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {
  //------------- perso info -----------------------
  statutAlert= true;
  user;
  firstName;
  lastName;
  email;
  bDate;
  //-----------change mdp -------------------
  old_p;
  new_p;
  confirm;
  Subscriber: Subscription;
//--------------receive----
  constructor(private UserService: UserService, private LoginService: LoginService, private router: Router) { }

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

  change_password(){
    if(this.new_p == this.confirm){
        this.Subscriber = this.UserService.reset_password(this.old_p,this.new_p,this.user.id).subscribe(
          sen => console.log(sen),
          error =>{ console.log(error); 
            this.statutAlert=false;
          }
        );
    } else{
      this.statutAlert=false;
    }
  }

}
