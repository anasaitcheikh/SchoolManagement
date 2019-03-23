import {Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import {ClassService} from '../../../../services/class.service';
import {LoginService} from '../../../../services/login.service';
import { Router, ActivatedRoute } from '@angular/router'
import { Class } from '../../../../utils/types';

@Component({
  selector: 'app-edit-class',
  templateUrl: './edit-class.component.html',
  styleUrls: ['./edit-class.component.scss']
})
export class EditClassComponent implements OnInit, OnDestroy {
    _editClassSubscriber: Subscription;
    _getClassSubscriber: Subscription;
    classId : number;
    name : string;
    schoolYear : number;
    level : string;
    grade : number;
    class: Class;
  
    constructor(private classService: ClassService, 
      private LoginService: LoginService, 
      private router: Router, 
      private activatedRoute: ActivatedRoute) { }
  
    ngOnInit() {
      if (!this.LoginService.is_loggedin()){
        this.router.navigate(['login'])
      }
      this.classId  = this.activatedRoute.snapshot.params['id'];
      console.log("classId", this.classId);
      this.getClassById()
    }
  
    ngOnDestroy(): void {
      if (this._editClassSubscriber != null) {
        this._editClassSubscriber.unsubscribe();
      }
  
      if (this._getClassSubscriber != null) {
        this._getClassSubscriber.unsubscribe();
      }
    }
  
    editClass() {
      this.class.name=this.name;
      this.class.schoolYear=this.schoolYear;
      this.class.level=this.level;
      this.class.grade=this.grade;
      this._editClassSubscriber = this.classService.updateClass(this.class, this.classId).subscribe(
        newClass => {
          this.router.navigate(['headmaster/classes'])},
        error => {console.log(error);}
      );
    }
  
    getClassById() {
      this._getClassSubscriber = this.classService.getClassById(this.classId).subscribe(
        res => {
          console.error(res)
          this.class = res;
          this.name=res.name;
          this.schoolYear=res.schoolYear;
          this.level=res.level;
          this.grade=res.grade;
        },
        error => console.log(error)
      );
    }
  
  }
  
