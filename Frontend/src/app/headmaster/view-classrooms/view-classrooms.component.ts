import { Component, OnInit } from '@angular/core';
import { Classroom } from '../../../utils/types';
import { Subscription } from 'rxjs';
import { ClassroomService } from '../../../services/classroom.service';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-view-classrooms',
  templateUrl: './view-classrooms.component.html',
  styleUrls: ['./view-classrooms.component.scss']
})
export class ViewClassroomsComponent implements OnInit {
  private ClassroomSubscriber: Subscription
  resJson : any
  classrooms : Classroom[];
  constructor(private ClassroomService: ClassroomService,private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
     this.allclassrooms();
  }

  allclassrooms(){
    console.log('show classroom');
    this.ClassroomSubscriber = this.ClassroomService.getClassrooms().subscribe(
      res => {
        this.classrooms = JSON.parse(JSON.stringify(res))
        console.error('show classrooms', this.classrooms);
       },
      error => console.log(error)
    )
  }


}
