import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saisirnotes-teacher',
  templateUrl: './saisirnotes-teacher.component.html',
  styleUrls: ['./saisirnotes-teacher.component.scss']
})
export class SaisirnotesTeacherComponent implements OnInit {

  firstname  : string;
  lastname : string;
  score  : string;
  subject : string;

  constructor() { }

  ngOnInit() {
  }

  changescore(){
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.score);
    console.log(this.subject);
  }

}
