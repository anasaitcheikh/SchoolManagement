import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss']
})
export class AddTeacherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addTeacher(teacher){
     console.log('click on add teaher');
     console.log(teacher.firstname);
    console.log(teacher.lastname);
    console.log(teacher.email);
    console.log(teacher.password);
    console.log(teacher.class);
    console.log(teacher.course);
  }
}
