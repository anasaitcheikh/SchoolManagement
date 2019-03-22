import { Observable, Subscription } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
import { MarkService } from '../../../services/mark.service';

@Component({
  selector: 'app-result-student',
  templateUrl: './result-student.component.html',
  styleUrls: ['./result-student.component.scss']
})
export class ResultStudentComponent implements OnInit {
  user;
  mark_list;

  Subscriber : Subscription;
  constructor( private MarkService: MarkService, private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.user = JSON.parse(localStorage.getItem('user'));
    this.get_marks();
/*
    this.default_data = [
      { Subject: 'Math', Grade: '10' },
      { Subject: 'SVT', Grade: '11'},
      { Subject: 'Physic', Grade: '13' },
  ];
  */
  }

  get_marks(){
    this.Subscriber = this.MarkService.getMarkByStudent(this.user.id).subscribe(
      sen => { console.log(sen);
      this.mark_list= JSON.parse(JSON.stringify(sen));
      },
      error => console.log(error)
    );
  }

}
