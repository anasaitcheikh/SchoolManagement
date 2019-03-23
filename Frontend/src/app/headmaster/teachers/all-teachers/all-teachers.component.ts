import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Teacher } from '../../../../utils/types';
import { Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';
import { TeacherService } from '../../../../services/teacher.service';

@Component({
  selector: 'app-all-teachers',
  templateUrl: './all-teachers.component.html',
  styleUrls: ['./all-teachers.component.scss']
})
export class AllTeachersComponent implements OnInit {
  private _allTeachersSubscriber: Subscription;
  Json;
  teacher : Teacher[];
  
  ngOnDestroy(): void {
    if (this._allTeachersSubscriber){
      this._allTeachersSubscriber.unsubscribe();
    }
  }
  constructor(private LoginService: LoginService, 
    private router: Router,
    private teacherService: TeacherService) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.allteachers();
  }

  allteachers(){
    this._allTeachersSubscriber = this.teacherService.getTeachers().subscribe(
      res => {
        this.Json =JSON.parse(JSON.stringify(res));
      
        console.error("yaya",this.Json);
        this.teacher=this.Json;
      },
      error => console.log(error)
   )
  }

  deleteTeacher(teacher_id){
    this._allTeachersSubscriber = this.teacherService.deleteTeacher(teacher_id).subscribe(
      res => { console.log("delete teacher",res);
      window.location.reload();
         /*if(!res.success) {
        this._flash.show(res.message, { cssClass : 'alert-danger '});
      }else{
        this._fetchPlans();
        this._flash.show('Plan deleted', { cssClass : 'alert-success '});
      */},
      error => console.log(error)
   )
  }

}
