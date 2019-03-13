import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-student',
  templateUrl: './result-student.component.html',
  styleUrls: ['./result-student.component.scss']
})
export class ResultStudentComponent implements OnInit {
  default_data: Array<any>;
  constructor() { }

  ngOnInit() {
    this.default_data = [
      { Subject: 'Math', Grade: '10' },
      { Subject: 'SVT', Grade: '11'},
      { Subject: 'Physic', Grade: '13' },
  ];
  }

}
