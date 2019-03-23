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
  student : Student[];

  constructor(private studentService: StudentService, 
    private LoginService: LoginService, 
    private router: Router, 
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if (!this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.allstudents();
    
  }

  ngOnDestroy(): void {
    if (this._allStudentsSubscriber){
      this._allStudentsSubscriber.unsubscribe();
    }
    if (this._deleteStudentSubscriber){
      this._deleteStudentSubscriber.unsubscribe();
    }
  }

  allstudents(){
    this._allStudentsSubscriber = this.studentService.getStudents().subscribe(
      res => {
        this.Json = JSON.parse(JSON.stringify(res));
        this.student = this.Json;
      },
      error => console.log(error)
   ) 
  }

  deleteStudent(student_id){
    this._deleteStudentSubscriber = this.studentService.deleteStudent(student_id).subscribe(
      res => { console.error("delete student",res); 
                window.location.reload();
      /*   if(!res.id) {
        this._flash.show(res.message, { cssClass : 'alert-danger '});
      }else{
        this._fetchPlans();
        this._flash.show('Plan deleted', { cssClass : 'alert-success '});
      */},
      error => {console.error(error);}
   )
  }
}
