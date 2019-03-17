import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-edt-teacher',
  templateUrl: './edit-edt-teacher.component.html',
  styleUrls: ['./edit-edt-teacher.component.scss']
})
export class EditEdtTeacherComponent implements OnInit {

  day: string;
  fromto : string;
  subject : string;
  classroom : string; 

  constructor() { }

  ngOnInit() {
  }
  edit_edt(){
    console.log(this.day);
    console.log(this.fromto);
    console.log(this.subject);
    console.log(this.classroom);

  }

}
