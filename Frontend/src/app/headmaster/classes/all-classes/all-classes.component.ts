import { Component, OnInit, OnDestroy } from '@angular/core';
import {LoginService} from '../../../../services/login.service';
import { Router } from '@angular/router'
import { Class } from '../../../../utils/types';
import { Subscription } from 'rxjs';
import { ClassService } from '../../../../services/class.service';

@Component({
  selector: 'app-all-classes',
  templateUrl: './all-classes.component.html',
  styleUrls: ['./all-classes.component.scss']
})
export class AllClassesComponent implements OnInit {
  private _allClassesSubscriber: Subscription;
  private _deleteClassSubscriber: Subscription;
  Json;
  class : Class[];

  ngOnDestroy(): void {
    if (this._allClassesSubscriber){
      this._allClassesSubscriber.unsubscribe();
    }
    if (this._deleteClassSubscriber){
      this._deleteClassSubscriber.unsubscribe();
    }
  }


  constructor(private LoginService: LoginService, 
    private router: Router,
    private classService: ClassService) { }

    ngOnInit() {
      if(! this.LoginService.is_loggedin()){
        this.router.navigate(['login'])
      }
      this.allclasses();
    }
    allclasses(){
      this._allClassesSubscriber = this.classService.getClasses().subscribe(
        res => {
          this.class =JSON.parse(JSON.stringify(res));
          console.error("show classes",this.class);
        },
        error => console.log(error)
     )
    } 
    deleteClass(class_id){
      this._deleteClassSubscriber = this.classService.deleteClass(class_id).subscribe(
        res => { console.error("delete class",res);
                  window.location.reload();
        /*   if(!res.id) {
          this._flash.show(res.message, { cssClass : 'alert-danger '});
        }else{
          this._fetchPlans();
          this._flash.show('Plan deleted', { cssClass : 'alert-success '});
        */},
        error => console.error(error)
     ) 
    }
}
