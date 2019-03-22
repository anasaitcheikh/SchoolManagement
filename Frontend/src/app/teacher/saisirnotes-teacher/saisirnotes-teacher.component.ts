import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-saisirnotes-teacher',
  templateUrl: './saisirnotes-teacher.component.html',
  styleUrls: ['./saisirnotes-teacher.component.scss']
})
export class SaisirnotesTeacherComponent implements OnInit {

  firstname  : string;
  lastname : string;
  score  : string;
  subject : string;

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }

  changescore(){
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.score);
    console.log(this.subject);
  }

}
