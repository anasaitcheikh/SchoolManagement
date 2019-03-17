import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-password-student',
  templateUrl: './update-password-student.component.html',
  styleUrls: ['./update-password-student.component.scss']
})
export class UpdatePasswordStudentComponent implements OnInit {
  old : string;
  new : string;
  conf_new : string;  
  constructor() { }

  ngOnInit() {
  }

  update() {
    console.log(this.old);
    console.log(this.new);
    console.log(this.conf_new);
  }

}
