import { Component, OnInit } from '@angular/core';
import {HeadmasterService} from '../../../services/headmaster.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {

  constructor(private headmasterService: HeadmasterService) { }

  ngOnInit() {
  }

  addStudent(value) {
     console.log('click on add student');
     console.log(value.firstname);
     console.log(value.lastname);
     console.log(value.email);
     console.log(value.password);
     console.log(value.class);
  }
}
