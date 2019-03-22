import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-timetable-student',
  templateUrl: './timetable-student.component.html',
  styleUrls: ['./timetable-student.component.scss']
})
export class TimetableStudentComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }

}
