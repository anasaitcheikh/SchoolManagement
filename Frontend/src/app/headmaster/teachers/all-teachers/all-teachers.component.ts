import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Teacher } from '../../../utils/types';
import { Router } from '@angular/router';
import { LoginService } from '../../../services/login.service';
import { HeadmasterService } from '../../../services/headmaster.service';

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
  constructor(private LoginService: LoginService, private router: Router,private headmasterService: HeadmasterService) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.allteachers();
  }

  allteachers(){
    this._allTeachersSubscriber = this.headmasterService.getAllTeachers().subscribe(
      res => {
        this.Json =JSON.parse(JSON.stringify(res));
      
        console.error("yaya",this.Json);
        this.teacher=this.Json;
       /* this.teacher.firstname =this.Json.firstname;
        this.teacher.lastname = this.Json.lastname;
        this.teacher.birthDate = this.Json.birthDate;
        this.teacher.speciality = this.Json.specialty;
        this.teacher.email = this.Json.email;*/
      },
      error => console.log(error)
   )
  }

  deleteTeacher(teacher_id){
    this._allTeachersSubscriber = this.headmasterService.deleteTeacher(teacher_id).subscribe(
      res => { console.error("bikhtissar",res);
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
