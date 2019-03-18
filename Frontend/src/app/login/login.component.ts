import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router'
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
    this._loginSubscriber.unsubscribe();
  }
  loginError : boolean;
  email : string;
  password : string;

  private _loginSubscriber: Subscription

  constructor(private loginService: LoginService, 
              private tokenService: TokenService,
              private router: Router
    ) { }

  ngOnInit() {
    
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
          console.log(error);
          this.loginError = true;
        }
      );
  }

  

}
