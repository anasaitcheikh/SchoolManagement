import { Component, OnInit, OnDestroy } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import {HeadmasterService} from '../../../services/headmaster.service';
import { Router } from '@angular/router'
import { Class } from '../../../utils/types';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-view-classes',
  templateUrl: './view-classes.component.html',
  styleUrls: ['./view-classes.component.scss']
})
export class ViewClassesComponent implements OnInit,OnDestroy {
  private _allClassesSubscriber: Subscription;
  Json;
  class : Class
  
  ngOnDestroy(): void {
    if (this._allClassesSubscriber){
      this._allClassesSubscriber.unsubscribe();
    }
  }

  constructor(private LoginService: LoginService, private router: Router,private headmasterService: HeadmasterService) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }

  allclasses(){
    this._allClassesSubscriber = this.headmasterService.getAllClasses().subscribe(
      res => {
        this.Json =JSON.parse(JSON.stringify(res));
        this.class.name =this.Json.firstname;
        this.class.schoolYear = this.Json.schoolYear;
        this.class.grade = this.Json.grade;
        this.class.level = this.Json.level;
      },
      error => console.log(error)
   )
  }
}
