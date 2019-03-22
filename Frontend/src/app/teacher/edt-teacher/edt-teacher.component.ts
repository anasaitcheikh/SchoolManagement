import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-edt-teacher',
  templateUrl: './edt-teacher.component.html',
  styleUrls: ['./edt-teacher.component.scss']
})
export class EdtTeacherComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }

}
