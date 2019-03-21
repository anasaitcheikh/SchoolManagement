import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-index',
  templateUrl: './index-headmaster.component.html',
  styleUrls: ['./index-headmaster.component.scss'],

})
export class IndexHeadmasterComponent implements OnInit {
  showloading = false;

  public AnimationBarOption;

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }
}
