import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-timetable-headmaster',
  templateUrl: './edit-timetable-headmaster.component.html',
  styleUrls: ['./edit-timetable-headmaster.component.scss']
})
export class EditTimetableHeadmasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
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
