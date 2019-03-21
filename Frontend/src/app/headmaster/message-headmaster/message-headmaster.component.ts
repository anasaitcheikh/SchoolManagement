import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-message-headmaster',
  templateUrl: './message-headmaster.component.html',
  styleUrls: ['./message-headmaster.component.scss']
})
export class MessageHeadmasterComponent implements OnInit {
  email : string;
  object : string;
  msg : string;
  
  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }
  
  send(){
    console.log(this.email);
    console.log(this.object);
    console.log(this.msg);
  }



}
