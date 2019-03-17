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

}
