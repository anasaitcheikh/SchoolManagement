import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../../services/login.service';
import { Router } from '@angular/router'
@Component({
  selector: 'app-edit-timetable-headmaster',
  templateUrl: './edit-timetable-headmaster.component.html',
  styleUrls: ['./edit-timetable-headmaster.component.scss']
})
export class EditTimetableHeadmasterComponent implements OnInit {

  constructor(private LoginService: LoginService, private router: Router) { }

  ngOnInit() {
    if(! this.LoginService.is_loggedin()){
      this.router.navigate(['login'])
    }
  }

  createTimeTable(table){
     console.log('click on create time table');
     console.log(table.day);
    console.log(table.fromTo);
    console.log(table.subject);
    console.log(table.classRoom);
 }

  modifyTimeTable(table){
    console.log('click on modify time table');
    console.log(table.day);
    console.log(table.fromTo);
    console.log(table.subject);
    console.log(table.classRoom);
  }
}
