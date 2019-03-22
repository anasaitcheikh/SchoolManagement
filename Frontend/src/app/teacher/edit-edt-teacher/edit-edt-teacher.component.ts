import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-edt-teacher',
  templateUrl: './edit-edt-teacher.component.html',
  styleUrls: ['./edit-edt-teacher.component.scss']
})
export class EditEdtTeacherComponent implements OnInit {

  day: string;
  fromto : string;
  subject : string;
  classroom : string; 

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }
  edit_edt(){
    console.log(this.day);
    console.log(this.fromto);
    console.log(this.subject);
    console.log(this.classroom);

  }

}
