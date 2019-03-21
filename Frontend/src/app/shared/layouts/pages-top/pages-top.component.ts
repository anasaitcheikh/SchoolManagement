import { Component, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import {LoginService} from '../../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'pages-top',
  templateUrl: './pages-top.component.html',
  styleUrls: ['./pages-top.component.scss'],
})
export class PagesTopComponent {
  avatarImgSrc: string = 'assets/images/avatar.png';
  user;
  firstname;
  lastname;
  status;

  sidebarToggle: boolean = true;
  tip = { ring: true, email: true };

  constructor(private _globalService: GlobalService, private LoginService: LoginService, private router: Router) 
  { 
    this.user = JSON.parse(localStorage.getItem('user'));
    this.firstname = this.user.firstname;
    this.lastname = this.user.lastname;
    this.status = this.user.status;
  }

  logout(){
    this.LoginService.logout();
    this.router.navigate(['login'])
  }

  public _sidebarToggle() {
    /* this._globalService.sidebarToggle$.subscribe(sidebarToggle => {
      this.sidebarToggle = sidebarToggle;
    }, error => {
      console.log('Error: ' + error);
    }); */

    this._globalService.data$.subscribe(data => {
      if (data.ev === 'sidebarToggle') {
        this.sidebarToggle = data.value;
      }
    }, error => {
      console.log('Error: ' + error);
    });
    this._globalService.dataBusChanged('sidebarToggle', !this.sidebarToggle);


    //this._globalService._sidebarToggleState(!this.sidebarToggle);
  }
}
