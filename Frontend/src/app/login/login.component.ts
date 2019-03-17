import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email : string;
  password : string;


  constructor() { }

  ngOnInit() {
  }

  login() {
    console.log(this.email);
    console.log(this.password);

    /*this.loginError = false;
    this.sub = this.authenticateService.login(form.email, form.password)
      .subscribe(
        data => {
          console.log("login successful!");
          console.log("data");
          console.log(data);
          this.router.navigate(['']);

        },
        error => {
          console.log(error);
          this.loginError = true;
        }
      );
      */
  }



}
