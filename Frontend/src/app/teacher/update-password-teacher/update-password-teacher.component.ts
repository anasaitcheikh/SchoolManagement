import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-password-teacher',
  templateUrl: './update-password-teacher.component.html',
  styleUrls: ['./update-password-teacher.component.scss']
})
export class UpdatePasswordTeacherComponent implements OnInit {

  oldpwd : string;
  newpwd : string;
  confirmpwd : string;

  constructor() { }

  ngOnInit() {
  }

  update(){
    console.log(this.oldpwd);
    console.log(this.newpwd);
    console.log(this.confirmpwd);

  }

}
