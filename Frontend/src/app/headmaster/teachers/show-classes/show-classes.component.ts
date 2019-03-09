import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Class } from '../../../../utils/types';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService } from '../../../../services/login.service';
import {ClassService} from '../../../../services/class.service';



@Component({
  selector: 'app-show-classes',
  templateUrl: './show-classes.component.html',
  styleUrls: ['./show-classes.component.scss']
})
export class ShowClassesComponent implements OnInit, OnDestroy {
  private _allClassesSubscriber: Subscription;
  Json;
  class : Class[];
  user;
  teacherId : number;
  
  ngOnDestroy(): void {
    if (this._allClassesSubscriber){
      this._allClassesSubscriber.unsubscribe();
    }
  }

  constructor(private LoginService: LoginService, private router: Router,private ClassService: ClassService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
    this.teacherId  = this.activatedRoute.snapshot.params['id'];
    console.log("teacherId", this.teacherId);
    this.allclasses();

  }

  allclasses(){
    this._allClassesSubscriber = this.ClassService.getClassByTeacher(this.teacherId).subscribe(
      res => {
        this.class =JSON.parse(JSON.stringify(res));
        console.error("show classes",this.class);
      },
      error => {
      console.log(error)}
   )
  } 

}
