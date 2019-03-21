import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-enter-notes',
  templateUrl: './enter-notes.component.html',
  styleUrls: ['./enter-notes.component.scss']
})
export class EnterNotesComponent implements OnInit {
  firstn : string;
  lastn : string;
  subject : string;
  score : number;
  
  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }
  
  send(){
    console.log(this.firstn);
    console.log(this.lastn);
    console.log(this.subject);
    console.log(this.score);

  }

}
