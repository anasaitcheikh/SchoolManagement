import { Component, OnInit, OnDestroy } from '@angular/core';
import { StudentService } from '../../../../services/student.service';
import { Subscription } from 'rxjs';
import { Student } from '../../../../utils/types';
import {LoginService} from '../../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-all-students',
  templateUrl: './all-students.component.html',
  styleUrls: ['./all-students.component.scss']
})
export class AllStudentsComponent implements OnInit,OnDestroy {
  private _allStudentsSubscriber: Subscription;
  private _deleteStudentSubscriber: Subscription;
  Json;
  class_id : number;
  student : Student[];

  constructor(private studentService: StudentService, 
    private LoginService: LoginService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.class_id = this.activatedRoute.snapshot.params['id'];
    console.log("class_id", this.class_id);
    this.allstudents(this.class_id);
    
  }

  ngOnDestroy(): void {
    if (this._allStudentsSubscriber){
      this._allStudentsSubscriber.unsubscribe();
    }
    if (this._deleteStudentSubscriber){
      this._deleteStudentSubscriber.unsubscribe();
    }
  }

  allstudents(class_id){
    this._allStudentsSubscriber = this.studentService.getAllStudentByClassId(class_id).subscribe(
      res => {
        this.Json = JSON.parse(JSON.stringify(res));
        this.student = this.Json;
      },
      error => console.log(error)
   ) 
  }

}
