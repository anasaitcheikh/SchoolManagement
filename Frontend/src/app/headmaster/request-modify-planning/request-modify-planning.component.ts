import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-request-modify-planning',
  templateUrl: './request-modify-planning.component.html',
  styleUrls: ['./request-modify-planning.component.scss']
})
export class RequestModifyPlanningComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }

}
