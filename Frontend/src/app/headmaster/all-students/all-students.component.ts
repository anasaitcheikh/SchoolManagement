import { Component, OnInit, OnDestroy } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Student } from '../../../utils/types';
import { HeadmasterService } from '../../../services/headmaster.service';
@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit, OnDestroy {
  private _allStudentsSubscriber: Subscription;
  Json;
  student : Student[];
  
  ngOnDestroy(): void {
    if (this._allStudentsSubscriber){
      this._allStudentsSubscriber.unsubscribe();
    }
  }

  constructor(private LoginService: LoginService, private router: Router,private headmasterService: HeadmasterService) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.allstudents();
  }

  allstudents(){
    this._allStudentsSubscriber = this.headmasterService.getAllStudents().subscribe(
      res => {
        console.error("allstudents",res);
        this.student =JSON.parse(JSON.stringify(res));
        
        /*this.student.lastname = this.Json.lastname;
        this.student.birthDate = this.Json.birthDate;
        this.student.email = this.Json.email;*/
      },
      error => console.log(error)
   )
  }

}
