import { Component, OnInit, OnDestroy } from '@angular/core';
import { LoginService } from '../../../../services/login.service';
import { Router } from '@angular/router';
import {ClassService} from '../../../../services/class.service';
import { Class } from '../../../../utils/types';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-list-classes-teacher',
  templateUrl: './list-classes-teacher.component.html',
  styleUrls: ['./list-classes-teacher.component.scss']
})
export class ListClassesTeacherComponent implements OnInit,OnDestroy {
  private _allClassesSubscriber: Subscription;
  Json;
  class : Class[];
  user;
  ngOnDestroy(): void {
    if (this._allClassesSubscriber){
      this._allClassesSubscriber.unsubscribe();
    }
  }

  constructor(private LoginService: LoginService, private router: Router,private ClassService: ClassService) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.user = JSON.parse(localStorage.getItem('user'));
    this.allclasses();

  }

  allclasses(){
    this._allClassesSubscriber = this.ClassService.getClassByTeacher(this.user.id).subscribe(
      res => {
        this.class =JSON.parse(JSON.stringify(res));
        console.error("show classes",this.class);
      },
      error => console.log(error)
   )
  } 


}
