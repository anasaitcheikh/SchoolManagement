import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Subscription } from 'rxjs/Subscription';
import { TokenService } from '../../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})


export class LoginComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    if(this._loginSubscriber != null)
      this._loginSubscriber.unsubscribe();
  }
  failed : boolean;
  loginError : boolean;
  email : string;
  password : string;

  user;
  private _loginSubscriber: Subscription

  constructor(private loginService: LoginService, 
              private tokenService: TokenService,
              private router: Router
    ) { }

  ngOnInit() {
    this.failed=false;
    this.user = JSON.parse(localStorage.getItem('user'));
    if( this.loginService.is_loggedin()){
      if(this.user.status=="HEADMASTER")
        this.router.navigate(['headmaster'])
      else if(this.user.status=="TEACHER")
        this.router.navigate(['teacher'])
      else if(this.user.status=="STUDENT")
        this.router.navigate(['student'])
    }
  }

  login() {
    console.log(this.email);
    console.log(this.password);

    this.loginError = false;
    this._loginSubscriber = this.loginService.login(this.email, this.password)
      .subscribe(
        res => {
          const resBody = JSON.parse(JSON.stringify(res))
          this.tokenService.setToken(resBody.token)
          localStorage.setItem('user', JSON.stringify(resBody.user));
          
          switch (resBody.user.status){
            case 'HEADMASTER':
              this.router.navigate(['headmaster'])
              break;
            case 'TEACHER':
              this.router.navigate(['teacher'])
              break;
            case 'STUDENT':
              this.router.navigate(['student'])
              break;
          }
        },
        error => {
          this.failed=true;
          console.log(error);
          this.loginError = true;
        }
      );
  }

  

}
